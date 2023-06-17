import { List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Dashboard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';

export default function DashboardLinks() {
    return (
        <List>
            <Link to={"/dashboard"} className="dashboard-link">
                {location.pathname === "/dashboard" ?
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px', backgroundColor: 'rgba(0, 72, 255, 0.4)' }}>
                        <ListItemIcon sx={{ color: 'black', marginRight: '-10px' }}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'black' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Dashboard
                        </Typography>
                    </ListItemButton>
                    :
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                        <ListItemIcon sx={{ color: 'gray', marginRight: '-10px' }}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'gray' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Dashboard
                        </Typography>
                    </ListItemButton>
                }
            </Link>
            <Link to={"/dashboard/orders"} className="dashboard-link">
                {location.pathname === "/dashboard/orders" ?
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px', backgroundColor: 'rgba(0, 72, 255, 0.4)' }}>
                        <ListItemIcon sx={{ color: 'black', marginRight: '-10px' }}>
                            <CardMembershipIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'black' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Orders
                        </Typography>
                    </ListItemButton>
                    :
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                        <ListItemIcon sx={{ color: 'gray', marginRight: '-10px' }}>
                            <CardMembershipIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'gray' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Orders
                        </Typography>
                    </ListItemButton>
                }
            </Link>
            <Link to={"/dashboard/shipments"} className="dashboard-link">
                {location.pathname === "/dashboard/shipments" ?
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px', backgroundColor: 'rgba(0, 72, 255, 0.4)' }}>
                        <ListItemIcon sx={{ color: 'black', marginRight: '-10px' }}>
                            <LocalShippingIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'black' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Shipments
                        </Typography>
                    </ListItemButton>
                    :
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                        <ListItemIcon sx={{ color: 'gray', marginRight: '-10px' }}>
                            <LocalShippingIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'gray' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Shipments
                        </Typography>
                    </ListItemButton>
                }
            </Link>
            <Link to={"/dashboard/products"} className="dashboard-link">
                {location.pathname === "/dashboard/products" ?
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px', backgroundColor: 'rgba(0, 72, 255, 0.4)' }}>
                        <ListItemIcon sx={{ color: 'black', marginRight: '-10px' }}>
                            <StorefrontIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'black' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Products
                        </Typography>
                    </ListItemButton>
                    :
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                        <ListItemIcon sx={{ color: 'gray', marginRight: '-10px' }}>
                            <StorefrontIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'gray' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Products
                        </Typography>
                    </ListItemButton>
                }
            </Link>
            <Link to={"/dashboard/customers"} className="dashboard-link">
                {location.pathname === "/dashboard/customers" ?
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px', backgroundColor: 'rgba(0, 72, 255, 0.4)' }}>
                        <ListItemIcon sx={{ color: 'black', marginRight: '-10px' }}>
                            <GroupsIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'black' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Customers
                        </Typography>
                    </ListItemButton>
                    :
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                        <ListItemIcon sx={{ color: 'gray', marginRight: '-10px' }}>
                            <GroupsIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'gray' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Customers
                        </Typography>
                    </ListItemButton>
                }
            </Link>
            <Link to={"/dashboard/billing"} className="dashboard-link">
                {location.pathname === "/dashboard/billing" ?
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px', backgroundColor: 'rgba(0, 72, 255, 0.4)' }}>
                        <ListItemIcon sx={{ color: 'black', marginRight: '-10px' }}>
                            <LocalAtmIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'black' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Billing
                        </Typography>
                    </ListItemButton>
                    :
                    <ListItemButton sx={{ borderRadius: '10px', margin: '10px 0px 10px 0px' }}>
                        <ListItemIcon sx={{ color: 'gray', marginRight: '-10px' }}>
                            <LocalAtmIcon />
                        </ListItemIcon>
                        <Typography
                            variant="body1"
                            sx={{ color: 'gray' }}
                            fontFamily={"Roboto"}
                            fontWeight={600}
                            fontSize={14}
                        >
                            Billing
                        </Typography>
                    </ListItemButton>
                }
            </Link>
        </List>
    )
}
