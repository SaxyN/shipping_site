import TextField from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";

const CustomTextField = styled(TextField)({
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

export default function CssTextField() {
    return (
        <CustomTextField />
    )
}
