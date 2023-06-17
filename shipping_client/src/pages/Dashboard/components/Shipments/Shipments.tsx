import { Button, Typography, styled } from "@mui/material";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import "./Shipments.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const FilterButton = styled(Button)({
    borderRadius: "10px",
    textTransform: "none",
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'gray',
        border: 'none',
    },
    boxShadow: "5px 2px 5px gray",
    border: 'none',
})


export default function Shipments() {

    useEffect(() => {
        // const fetchCustomers = async () => {
        //     fetch("/api/getCustomers")
        //         .then(res => res.json())
        //         .then(res => {
        //             console.log(res);
        //         });
        // }
        // fetchCustomers().catch(console.error);
    }, [])

    return (
        <motion.div
            className="dashboard-shipments"
            initial={{ opacity: 0, translateY: '-15px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            exit={{ opacity: 0, translateY: '-15px' }}
            transition={{ type: "spring" }}
        >
            <div className="dashboard-shipments-left">
                <Typography
                    variant="h6"
                    fontFamily={"Roboto"}
                    fontWeight={800}
                    fontSize={20}
                >
                    SHIPMENTS
                </Typography>
                <div className="shipments-selector">
                    <Typography
                        variant="h6"
                        fontFamily={"Roboto"}
                        fontWeight={300}
                        fontSize={14}
                    >
                        PrePaid
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily={"Roboto"}
                        fontWeight={300}
                        fontSize={14}
                    >
                        In Transit
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily={"Roboto"}
                        fontWeight={300}
                        fontSize={14}
                    >
                        Completed
                    </Typography>
                </div>
            </div>
            <div className="dashboard-shipments-right">
                <FilterButton variant="outlined" startIcon={<ImportExportIcon />}>
                    Sort
                </FilterButton>
                <FilterButton variant="outlined" startIcon={<FilterAltIcon />}>
                    Add filter
                </FilterButton>
            </div>
        </motion.div>
    )
}
