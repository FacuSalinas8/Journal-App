import { createTheme } from "@mui/material";
import { green, lightBlue, red } from "@mui/material/colors";

export const colourTheme = createTheme({
    palette: {
        primary: {
            // main:'#262254'
            main: lightBlue[900]
        },
        secondary: {
            main:'#543884'
        },
        error: {
            main: red.A400
        }
    }
})