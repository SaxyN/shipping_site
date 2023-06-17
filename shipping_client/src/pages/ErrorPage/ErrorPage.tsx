import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

import BlackbirdLogo from "../../assets/blackbird_logo.png";

export default function ErrorPage() {
    return (
        <div className="errorpage">
            <img src={BlackbirdLogo} alt="" className="errorpage-logo" />
            <Typography
                sx={{ mt: 1 }}
                variant="h6"
                fontFamily={"Roboto"}
                fontSize={36}
            >Oops!</Typography>
            <Typography
                sx={{ mt: 1 }}
                variant="body1"
                fontFamily={"Roboto"}
                fontSize={18}
            >Something Went Wrong</Typography>
            <Typography
                sx={{ mt: 1 }}
                variant="body2"
                fontFamily={"Roboto"}
                fontSize={14}
            >Try coming back to this later</Typography>
            <Typography
                sx={{ mt: 1 }}
                variant="body2"
                fontFamily={"Roboto"}
                fontSize={14}
            >If you wish to return home, click <br />
                <Link to={"/"}>
                    HERE
                </Link>
            </Typography>
            <Typography
                sx={{ mt: 1 }}
                variant="body2"
                fontFamily={"Roboto"}
                fontSize={14}
            >Or simply go back in your browser</Typography>
        </div>
    )
}
