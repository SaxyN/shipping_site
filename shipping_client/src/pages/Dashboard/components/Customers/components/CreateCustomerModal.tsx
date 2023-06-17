import { Box, Button, Modal, TextField, Typography, styled } from "@mui/material";
import "./CreateCustomerModal.css";
import { useState } from "react";
import { enqueueSnackbar, useSnackbar } from "notistack";

const CssTextField = styled(TextField)({
    margin: '10px 0px 10px 0px',
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '15px',
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gray',
        },
    },
});

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

interface CustomModalProps {
    openCCreator: boolean,
    setOpenCCreator: (value: boolean) => void,
}

export default function CreateCustomerModal({ openCCreator, setOpenCCreator }: CustomModalProps) {
    const { enqueueSnackbar } = useSnackbar()
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    const handleCreate = () => {
        const fetchCustomers = async () => {
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
                }

            });
        }
        fetchCustomers().catch(console.error);
        handleClose();
    };

    const handleClose = () => {
        setOpenCCreator(false);
        setFirstName("");
        setLastName("");
        setLocation("");
    }

    return (
        <Modal open={openCCreator} onClose={() => handleClose()}>
            <div className="customer-create-modal">
                <Typography variant="h6" component="h2" sx={{ marginBottom: "15px" }}>
                    Add a new customer
                </Typography>
                <Box sx={{ marginBottom: "15px" }}>
                    <CssTextField
                        label="First Name"
                        className="customer-create-name-input"
                        placeholder="John"
                        autoFocus
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <CssTextField
                        label="Last Name"
                        className="customer-create-name-input"
                        placeholder="Smith"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <CssTextField
                        label="Location"
                        className="customer-create-name-input"
                        placeholder="Seattle, WA"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Box>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                    <CssButton variant="contained" onClick={() => handleCreate()}>CREATE</CssButton>
                </Box>
            </div>
        </Modal>
    )
}
