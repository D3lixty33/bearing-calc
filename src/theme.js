import { createTheme } from "@mui/material/styles";
import { root } from "postcss";

const theme = createTheme({
    typography: {
        fontFamily: 'Rubik, sans-serif', // Remove !important for better practice
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    '&:hover': {
                        backgroundColor: '#1a4568',
                        color: '#fff',
                    },
                    color: '#1a4568'
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    height: '40px',
                }
            }
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    marginTop: '-6.5px'
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '240px',
                    // Targeting the input field's outline when focused
                    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                        borderColor: '#1a4568', // Border color when focused
                        borderWidth: '1px'
                    },
                    // Targeting the input text color when focused
                    '& .MuiOutlinedInput-root.Mui-focused': {
                        color: '#1a4568', // Input text color on focus
                    },
                    // Targeting the label color when focused
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#1a4568', // Label color on focus
                    },
                    backgroundColor: 'white'
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    '& .MuiPaper-root': {
                        height: 'auto',
                        position: 'relative',
                        borderWidth: '1px',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
                        borderRadius: '10px'
                    },
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: '0px',
                    margin: '0px',
                    '@media (min-width: 600px)': {
                        paddingLeft: '0px',
                        paddingRight: '0px',
                    },
                    '@media (min-width: 1200px)': {
                        maxWidth: '100%',
                    },
                    minHeight: '800px'
                }
            }
        },
    } // Closing bracket for components
}); // Closing bracket for createTheme

export default theme;
