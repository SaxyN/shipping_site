import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import "./Customers.css";
import { Typography, Button, styled, Avatar } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from "framer-motion";

import { ICustomer } from "../../../../types/ICustomer";
import CreateCustomerModal from "./components/CreateCustomerModal";

import { DataGrid, GridColDef, GridRowModesModel, GridRowId, GridRowModes, GridActionsCellItem, GridEventListener, GridRowEditStopReasons } from "@mui/x-data-grid";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSnackbar } from "notistack";

const CssButton = styled(Button)({
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'gray',
    },
    padding: '12px 12px 12px 12px',
    borderRadius: '13px',
    textTransform: 'none',
})

export default function Customers() {
    const loadData = useLoaderData() as ICustomer[];
    const { enqueueSnackbar } = useSnackbar();

    const [customers, setCustomers] = useState<ICustomer[]>([]);
    const [openCCreator, setOpenCCreator] = useState<boolean>(false);
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

    useEffect(() => {
        setCustomers(loadData);
    }, []);

    const handleCreate = (firstName: string, lastName: string, location: string) => {
        fetch("/api/createCustomer", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: firstName + " " + lastName,
                location: location,
            })
        }).then(res => {
            if (res.status === 200) {
                enqueueSnackbar(firstName + " " + lastName + " was added successfully", { variant: "success" });
                fetchCustomers();
            }

        });
    };

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
        else {
            console.log(event);
        }
    };

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: GridRowId, row: ICustomer) => () => {
        fetch("/api/deleteCustomer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
            })
        }).then(res => {
            console.log(res);
            if (res.statusText === "OK") {
                enqueueSnackbar("Customer: [" + id + "] " + row.name + " was deleted successfully", { variant: "success" });
                fetchCustomers();
            } else {
                enqueueSnackbar("There was an error processing your request", { variant: "error" });
            }
        });
    };

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });
    };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const processRowUpdate = (newRow: ICustomer) => {
        const updatedRow = { ...newRow, isNew: false };

        const compareCustomer: ICustomer | undefined = customers.find((customer: ICustomer) => {
            return customer.id === newRow.id;
        })
        if (compareCustomer === undefined) {
            console.error("processRowUpdate: No entry for ID: [" + newRow.id + "]");
            throw new Error("Bad Row Update");
        }

        setCustomers(customers.map((customer: ICustomer) => (customer.id === newRow.id ? newRow : customer)));
        fetch("/api/updateCustomer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newRow.name,
                location: newRow.location,
                total_orders: newRow.total_orders,
                id: newRow,
            })
        }).then(res => {
            console.log(res);
            if (res.statusText === "Created" && res.status === 201) {
                enqueueSnackbar(newRow.name + " was updated successfully", { variant: "success", autoHideDuration: 3000 });
                fetchCustomers();
            } else {
                enqueueSnackbar("There was an error processing your request", { variant: "error", autoHideDuration: 3000 })
            }
        });
        return updatedRow;
    };

    const fetchCustomers = () => {
        fetch("/api/getCustomers")
            .then(res => res.json())
            .then(res => {
                setCustomers(res);
            });
    }

    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'avatar',
            headerName: '',
            width: 100,
            editable: false,
            renderCell: () => {
                return (
                    <Avatar />
                )
            }
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'location',
            headerName: 'Location',
            type: 'string',
            width: 180,
            editable: true,
        },
        {
            field: 'total_orders',
            headerName: 'Orders',
            description: 'Active and/or Completed orders',
            width: 120,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id, row }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon sx={{ color: 'red' }} />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id, row)}
                        color="inherit"
                    />,
                ];
            }
        }
    ];

    return (
        <motion.div
            className="customers-back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "just" }}
        >
            <CreateCustomerModal openCCreator={openCCreator} setOpenCCreator={setOpenCCreator} handleCreate={handleCreate} />
            <div className="customers-title">
                <Typography
                    variant="h6"
                    fontFamily={"Roboto"}
                    fontWeight={800}
                    fontSize={20}
                    sx={{ color: "rgba(0,0,0,1.0)" }}
                >
                    CUSTOMERS
                </Typography>
                <CssButton variant="contained" onClick={() => setOpenCCreator(true)}>ADD NEW CUSTOMER</CssButton>
            </div>
            <div className="customer-grid">
                <DataGrid
                    rows={customers}
                    columns={columns}
                    disableRowSelectionOnClick
                    density="standard"
                    // slots={{ toolbar: GridToolbar }}
                    disableDensitySelector
                    disableColumnSelector
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    onProcessRowUpdateError={(error) => console.error(error)}
                    processRowUpdate={processRowUpdate}
                    slotProps={{
                        toolbar: { setCustomers, setRowModesModel },
                    }}
                />
                {/* {customers.map((customer: ICustomer, index: number) => {
                    return (
                        <Card className="customer-card" key={index} sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                            <CardHeader
                                title={customer.name}
                                subheader={customer.location}
                                action={
                                    <div>
                                        <Tooltip title="Edit Customer">
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete Customer">
                                            <IconButton>
                                                <DeleteIcon sx={{ color: 'black' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                }
                            />
                            <CardContent>
                                <div className="customer-card-content">
                                    <Tooltip title="Total Orders">
                                        <Box sx={{ display: 'flex', gap: "5px" }}>
                                            <InventoryIcon />
                                            <Typography>
                                                {customer.total_orders}
                                            </Typography>
                                        </Box>
                                    </Tooltip>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })} */}

            </div>
        </motion.div>
    )
}
