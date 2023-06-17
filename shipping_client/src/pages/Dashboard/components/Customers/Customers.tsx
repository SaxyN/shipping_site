import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import "./Customers.css";
import { Typography, Card, CardHeader, CardContent, Button, Box, Tooltip, styled, IconButton } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from "framer-motion";

import { ICustomer } from "../../../../types/ICustomer";
import CreateCustomerModal from "./components/CreateCustomerModal";

const CssButton = styled(Button)({
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'gray',
    },
    borderRadius: '15px',
    textTransform: 'none',
    // height: '56px',
})

export default function Customers() {
    const loadData = useLoaderData() as ICustomer[];

    const [customers, setCustomers] = useState<ICustomer[]>([]);
    const [openCCreator, setOpenCCreator] = useState<boolean>(false);

    useEffect(() => {
        setCustomers(loadData);
    })

    return (
        <motion.div
            className="customers-back"
            initial={{ opacity: 0, translateY: '-15px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            exit={{ opacity: 0, translateY: '-15px' }}
            transition={{ type: "just" }}
        >
            <CreateCustomerModal openCCreator={openCCreator} setOpenCCreator={setOpenCCreator} />
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
                {customers.map((customer: ICustomer, index: number) => {
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
                })}
            </div>
        </motion.div>
    )
}
