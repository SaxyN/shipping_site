import Button from "@mui/material/Button/Button";
import styled from "@mui/material/styles/styled";


export const CustomButton = styled(Button)({
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'gray',
    },
    borderRadius: '10px',
    textTransform: 'none',
})

// export default function CssButton() {
//     return (
//         <CustomButton></CustomButton>
//     )
// };