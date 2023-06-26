import "./LoginPage.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";

import BlackBirdLogo from "../../assets/blackbird.png";
import { Link, useNavigate } from "react-router-dom";
import { KeyboardEvent, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../main";

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

export default function LoginPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [passCode, setPassCode] = useState<string>("");
    const [user, setUser] = useState<User>();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                navigate("/dashboard")
            }
        });
    }, [])

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, passCode)
            .then(() => {
                // Signed in
                navigate("/dashboard")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    }

    return (
        (!user &&
            <div className="login-wrapper">
                <div className="login">
                    <div className="login-icon-wrapper">
                        <img src={BlackBirdLogo} alt="" className="login-icon" />
                    </div>
                    <div className="login-title">
                        <Typography
                            variant="h6"
                            fontFamily={"Roboto"}
                            fontSize={36}
                        >
                            Login
                        </Typography>
                        <Typography
                            variant="h3"
                            fontFamily={"Roboto"}
                            fontSize={16}
                        >
                            Hey, Enter your details to login to your account
                        </Typography>
                    </div>
                    <div className="login-inputs">
                        <CssTextField
                            label="Email"
                            className="login-username"
                            placeholder="example@mail.com"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <CssTextField
                            label="Passcode"
                            className="login-username"
                            placeholder="superdupersecretpasscode"
                            type="password"
                            onChange={(e) => setPassCode(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div className="login-button-wrapper">
                        <CssButton
                            className="login-button"
                            onClick={() => handleLogin()}
                            type="submit"
                        >
                            <Typography
                                variant="h3"
                                fontFamily={"Roboto"}
                                fontSize={18}
                            >
                                Sign in
                            </Typography>
                        </CssButton>
                    </div>
                    <div className="login-register">
                        <Typography
                            variant="h3"
                            fontFamily={"Roboto"}
                            fontSize={14}
                        >
                            Don't have an account yet?
                            <Link to={"/register"} style={{ textDecoration: 'none', color: 'black' }}><strong> Register Now!</strong></Link>
                        </Typography>
                    </div>
                </div>
            </div>
        )
    )
}
