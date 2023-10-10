import { Modal, Typography } from "@mui/material";
import { useState } from "react";
import "./CreateOrderModal.css";
import { CustomButton } from "../../../../../../components/CSSButton/CssButton";

interface CreateOrderModalProps {
    openOrderCreator: boolean,
    setOpenOrderCreator: (value: boolean) => void,
    handleCreateOrder: () => void,
}

export default function CreateOrderModal({ openOrderCreator, setOpenOrderCreator, handleCreateOrder }: CreateOrderModalProps) {

    const [customerID, setCustomerID] = useState<number>();


    return (
        <Modal open={openOrderCreator}>
            <div className="order-create-modal">
                <Typography>Create Order</Typography>
                <CustomButton
                    sx={{
                        backgroundColor: "red",
                        '&:hover': {
                            backgroundColor: 'rgb(117,7,7)',
                        },
                    }}
                    onClick={() => setOpenOrderCreator(false)}
                >
                    CANCEL
                </CustomButton>
            </div>
        </Modal>
    )
}
