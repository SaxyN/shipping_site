import "./Dashboard.css";

import Typography from '@mui/material/Typography';

import BlackBirdLogo from "../../assets/blackbird.png";

//Icons
import LogoutIcon from '@mui/icons-material/Logout';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Badge, IconButton, InputAdornment, TextField, styled } from "@mui/material";
import { useEffect } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../main';
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import DashboardLinks from "./components/DashboardLinks/DashboardLinks";

const CssTextField = styled(TextField)({
    margin: '10px 0px 10px 0px',
    width: '800px',
    height: '50px',
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

export default function Dashboard() {

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
            } else {
                // User is signed out
            }
        });

    }, [])

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/");
            console.log("Signed out user");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="dashboard-back">
            <div className="dashboard-left">
                <img src={BlackBirdLogo} alt="" className='dashboard-left-logo' />
                <DashboardLinks />
            </div>
            <div className="dashboard-right">
                <div className="dashboard-header">
                    <div className="dashboard-title">
                        <Typography
                            fontFamily={"Roboto"}
                            fontWeight={500}
                        >
                            DASHBOARD
                        </Typography>
                        <Typography
                            fontFamily={"Roboto"}
                            fontWeight={500}
                            sx={{ color: "rgba(0, 0, 0, 0.3)" }}
                        >
                            {location.pathname.split("/dashboard")}
                        </Typography>
                    </div>
                    <div className="dashboard-search">
                        <div className="dashboard-search-bar">
                            <CssTextField
                                placeholder="Search order, items..."
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <Badge badgeContent={7} max={5} color="primary">
                            <IconButton>
                                <NotificationsActiveOutlinedIcon />
                            </IconButton>
                        </Badge>
                        <IconButton>
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => handleLogout()}>
                            <LogoutIcon />
                        </IconButton>
                    </div>
                </div>
                <Outlet />
            </div>
        </div >
    )
}
