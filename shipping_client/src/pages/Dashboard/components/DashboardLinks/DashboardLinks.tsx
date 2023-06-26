import "./DashboardLinks.css";

import { Divider, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Dashboard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

interface DashboardLinkProps {
    Icon: React.ElementType,
    name: string,
}

const SelectedButton = ({ Icon, name }: DashboardLinkProps) => {
    return (
        <ListItemButton sx={{
            borderRadius: '10px',
            margin: '10px 0px 10px 0px',
            paddingTop: '13px',
            paddingBottom: '13px',
            backgroundColor: 'rgba(0, 0, 0, 1.0)',
            '&:hover': {
                backgroundColor: 'black',
                opacity: 1,
            },
        }}>
            <ListItemIcon sx={{ color: 'white', marginRight: '-10px' }}>
                <Icon />
            </ListItemIcon>
            <Typography
                variant="body1"
                sx={{ color: 'white' }}
                fontFamily={"Roboto"}
                fontWeight={600}
                fontSize={14}
            >
                {name}
            </Typography>
        </ListItemButton>
    )
}

const UnSelectedButton = ({ Icon, name }: DashboardLinkProps) => {
    return (
        <ListItemButton sx={{
            borderRadius: '10px',
            paddingTop: '13px',
            paddingBottom: '13px',
            margin: '10px 0px 10px 0px',
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.2)',
                opacity: 1,
            },
        }}>
            <ListItemIcon sx={{ color: 'gray', marginRight: '-10px' }}>
                <Icon />
            </ListItemIcon>
            <Typography
                variant="body1"
                sx={{ color: 'gray' }}
                fontFamily={"Roboto"}
                fontWeight={600}
                fontSize={14}
            >
                {name}
            </Typography>
        </ListItemButton>
    )
}

export default function DashboardLinks() {
    return (
        <div
            className="dashboard-link-upper"
        >
            <List sx={{ width: '75%' }}>
                <Link to={"/dashboard"} className="dashboard-link">
                    {location.pathname === "/dashboard" ?
                        <SelectedButton Icon={DashboardIcon} name={"Dashboard"} />
                        :
                        <UnSelectedButton Icon={DashboardIcon} name={"Dashboard"} />
                    }
                </Link>
                <Link to={"/dashboard/orders"} className="dashboard-link">
                    {location.pathname === "/dashboard/orders" ?
                        <SelectedButton Icon={CardMembershipIcon} name={"Orders"} />
                        :
                        <UnSelectedButton Icon={CardMembershipIcon} name={"Orders"} />
                    }
                </Link>
                <Link to={"/dashboard/shipments"} className="dashboard-link">
                    {location.pathname === "/dashboard/shipments" ?
                        <SelectedButton Icon={LocalShippingIcon} name={"Shipments"} />
                        :
                        <UnSelectedButton Icon={LocalShippingIcon} name={"Shipments"} />
                    }
                </Link>
                <Link to={"/dashboard/products"} className="dashboard-link">
                    {location.pathname === "/dashboard/products" ?
                        <SelectedButton Icon={StorefrontIcon} name={"Products"} />
                        :
                        <UnSelectedButton Icon={StorefrontIcon} name={"Products"} />
                    }
                </Link>
                <Link to={"/dashboard/customers"} className="dashboard-link">
                    {location.pathname === "/dashboard/customers" ?
                        <SelectedButton Icon={GroupsIcon} name={"Customers"} />
                        :
                        <UnSelectedButton Icon={GroupsIcon} name={"Customers"} />
                    }
                </Link>
                <Link to={"/dashboard/billing"} className="dashboard-link">
                    {location.pathname === "/dashboard/billing" ?
                        <SelectedButton Icon={LocalAtmIcon} name={"Billing"} />
                        :
                        <UnSelectedButton Icon={LocalAtmIcon} name={"Billing"} />
                    }
                </Link>

            </List>
            <div className="dashboard-link-lower">
                <Divider flexItem sx={{ borderColor: 'rgba(0, 0, 0, 0.3)' }} />
                <List sx={{ width: '75%' }}>
                    <Link to={"/dashboard/settings"} className="dashboard-link">
                        {location.pathname === "/dashboard/settings" ?
                            <SelectedButton Icon={SettingsIcon} name={"Settings"} />
                            :
                            <UnSelectedButton Icon={SettingsIcon} name={"Settings"} />
                        }
                    </Link>
                </List>
            </div>
        </div>
    )
}
