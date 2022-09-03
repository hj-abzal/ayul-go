import React from "react";
import {ThemeProvider} from "styled-components";

const lightTheme = {
    colors: {
        primary: '#f0f2f5',
        text: '#1d1d1d',
    },
    border: '1px solid #1d1d1d'
};

const darkTheme = {
    colors: {
        primary: '#1d1d1d',
        text: '#f0f2f5',
    },
    border: '1px solid #f0f2f5'
};


export const Theme = ({darkMode, children}) => {
    return <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>

}

