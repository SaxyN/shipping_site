import { IProduct } from "../../../../types/IProduct";
import { Button, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import "./Products.css";
import { useState } from "react";
import { CustomButton } from "../../../../components/CSSButton/CssButton";
import CreateOrderModal from "./components/CreateOrderModal/CreateOrderModal";

export default function Products() {

    const loadData = useLoaderData() as IProduct[];
    const [openOrderCreator, setOpenOrderCreator] = useState<boolean>(false);

    const handleCreateOrder = () => {

    }

    return (
        <motion.div
            className="products-back"
            initial={{ opacity: 0, translateY: '-15px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            exit={{ opacity: 0, translateY: '-15px' }}
            transition={{ type: "spring" }}
        >
            <div className="products-header">
                <Typography
                    variant="h6"
                    fontFamily={"Roboto"}
                    fontWeight={800}
                    fontSize={20}
                >
                    PRODUCTS
                </Typography>
                <CustomButton variant="contained" onClick={() => setOpenOrderCreator(true)}>CREATE ORDER</CustomButton>
            </div>
            <CreateOrderModal openOrderCreator={openOrderCreator} setOpenOrderCreator={setOpenOrderCreator} handleCreateOrder={handleCreateOrder} />
            <div className="products-grid">
                {loadData && loadData.map((product: IProduct, index: number) => {
                    return (
                        <motion.div
                            className="product-card"
                            key={index}
                        >
                            <div className="product-card-body">
                                <div className="product-card-body-media-backer">
                                    <img src={"/src/assets/" + product.img + ".png"} alt={product.img} className="product-card-body-media" />
                                </div>
                                <div>
                                    <div className="product-card-body-title">{product.name}</div>
                                    <div className="product-card-body-subtitle">{product.description}</div>
                                </div>
                                <div>
                                    <div className="product-card-body-price">${product.price.toLocaleString()}</div>
                                    {product.purchase_limit < 1 ? null : <>
                                        <div className="product-card-body-limit">Max Order: {product.purchase_limit}</div>
                                    </>}
                                </div>
                            </div>
                            <div className="product-card-actions">
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    className="product-card-actions-button"
                                    sx={{ padding: '10px 50px', width: '100%' }}
                                >
                                    Create Order
                                </Button>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}
