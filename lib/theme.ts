import { createTheme } from "@mui/material";
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#00bfa6',
        },
        secondary: {
            main: '#f50057',
        },
        text: {
            primary: '#263238',
            secondary: 'rgba(38,50,56,0.6)',
            disabled: 'rgba(38,50,56,0.38)',
        },
        background: {
            default: 'rgba(255,255,255,0.95)',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    color: "#fff"
                }
            }
        }
    }

};

export default createTheme(themeOptions);