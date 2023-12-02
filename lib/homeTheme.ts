import { createTheme } from "@mui/material";
import { PaletteOptions, ThemeOptions } from '@mui/material/styles';


export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#00bfa6',
        },
        secondary: {
            main: '#f5ce00',
        },
        text: {
            primary: '#263238',
            secondary: '#fff',
        },
        background: {
            default: 'rgba(255,255,255,0.95)',
        },
    },
    typography: {
        h1: {
            fontSize: "3.7rem"
        },
        h2: {
            fontSize: "2.9rem"
        },
        h3: {
            fontSize: "2.1rem"
        }
    },

};

const homeTheme = createTheme(themeOptions);

export default homeTheme;
