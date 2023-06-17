import "./Overview.css";

import { IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { useLoaderData } from "react-router-dom";

export default function Overview() {

    const data = useLoaderData();

    return (
        <motion.div
            className="overview-back"
            initial={{ opacity: 0, translateY: '-15px' }}
            animate={{ opacity: 1, translateY: '0px' }}
            exit={{ opacity: 0, translateY: '-15px' }}
            transition={{ type: "spring" }}
        >
            <div className="overview-stats">
                <div className="overview-stat">
                    <div className="stat-info">
                        <Typography
                            variant="body1"
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            sx={{ color: "rgba(0, 0, 0, 0.5)" }}
                        >Today's Money</Typography>
                        <Typography
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                        >$3,500</Typography>
                    </div>
                    <div className="stat-icon">
                        <IconButton disabled>
                            <PaidOutlinedIcon sx={{ color: 'black' }} fontSize={"inherit"} />
                        </IconButton>
                    </div>
                </div>
                <div className="overview-stat">
                    <div className="stat-info">
                        <Typography
                            variant="body1"
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            sx={{ color: "rgba(0, 0, 0, 0.5)" }}
                        >Monthly Sales</Typography>
                        <Typography
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                        >${"105,000"}</Typography>
                    </div>
                    <div className="stat-icon">
                        <IconButton disabled>
                            <LocalOfferOutlinedIcon sx={{ color: 'black' }} fontSize={"inherit"} />
                        </IconButton>
                    </div>
                </div>
                <div className="overview-stat">
                    <div className="stat-info">
                        <Typography
                            variant="body1"
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            sx={{ color: "rgba(0, 0, 0, 0.5)" }}
                        >Active Orders</Typography>
                        <Typography
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                        >45</Typography>
                    </div>
                    <div className="stat-icon">
                        <IconButton disabled>
                            <Inventory2OutlinedIcon sx={{ color: 'black' }} fontSize={"inherit"} />
                        </IconButton>
                    </div>
                </div>
                <div className="overview-stat">
                    <div className="stat-info">
                        <Typography
                            variant="body1"
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            sx={{ color: "rgba(0, 0, 0, 0.5)" }}
                        >Active Users</Typography>
                        <Typography
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                        >160</Typography>
                    </div>
                    <div className="stat-icon">
                        <IconButton disabled>
                            <GroupOutlinedIcon sx={{ color: 'black' }} fontSize={"inherit"} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
