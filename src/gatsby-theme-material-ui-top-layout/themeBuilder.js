import { createTheme } from '@mui/material';
import 'open-dyslexic'

const ThemeBuilder = function (primary, secondary) {
    const font = ["OpenDyslexicRegular"]

    //https://material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=A5D6A7&secondary.color=FF8A65
    const palette = {
        primary: {
            main: primary
        },
        secondary: {
            main: secondary
        }
    };

    const typography = {
        fontFamily: font,
        h1: {
            fontSize: "1.2rem",
            fontWeight: 600
        },
        h2: {
            fontSize: "1rem"
        },
        h3: {
            fontSize: "1rem",
            fontWeight: 600
        }
    };

    // See https://material.io/resources/color
    let theme = createTheme({
        palette: palette,
        /*  
          breakpoints: {
            values: { xs: 0, sm: 400, md: 700, lg: 1200, xl: 1536 }
          },
          */
        typography: typography
    });

    theme = createTheme(theme, {
        palette: {
            action: {
                disabled: "#fff",
                disabledBackground: theme.palette.primary.dark,
                disabledOpacity: 0.0
            }
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.primary.main
                    }
                }
            }
        }

    })

    return (theme);
};
export default ThemeBuilder;
