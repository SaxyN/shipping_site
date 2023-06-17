import "./RegisterPage.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import BlackBirdLogo from "../../assets/blackbird.png";

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
    height: '56px',
})

export default function RegisterPage() {
    return (
        <div className="register-wrapper">
            <div className="register">
                <div className="register-icon-wrapper">
                    <img src={BlackBirdLogo} alt="" className="register-icon" />
                </div>
                <div className="register-title">
                    <Typography
                        variant="h6"
                        fontFamily={"Roboto"}
                        fontSize={36}
                    >
                        Sign up
                    </Typography>
                    <Typography
                        variant="h3"
                        fontFamily={"Roboto"}
                        fontSize={16}
                    >
                        Welcome, Enter your details to begin making a account
                    </Typography>
                </div>
                <div className="register-inputs">
                    <CssTextField
                        label="Email/Username"
                        className="register-username"
                        placeholder="example@mail.com"
                        autoFocus
                    />
                    <CssTextField
                        label="Passcode"
                        className="register-username"
                        placeholder="superdupersecretpasscode"
                    />
                    <CssTextField
                        label="Re-Enter Passcode"
                        className="register-username"
                        placeholder="superdupersecretpasscode"
                    />
                </div>
                <div className="register-button-wrapper">
                    <CssButton className="register-button">
                        <Typography
                            variant="h3"
                            fontFamily={"Roboto"}
                            fontSize={18}
                        >
                            Sign up
                        </Typography>
                    </CssButton>
                </div>
                <div className="register-register">
                    <Typography
                        variant="h3"
                        fontFamily={"Roboto"}
                        fontSize={14}
                    >
                        Already have an account?
                        <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}><strong> Login Now!</strong></Link>
                    </Typography>
                </div>
            </div>
        </div>
    )
}
