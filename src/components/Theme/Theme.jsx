import React from "react";
import {ThemeProvider} from "styled-components";

export const COLORS = {
    white: '#ffffff',
    black: '#1d1d1d',
    focus: 'rgb(148, 82, 245)'
}

const lightTheme = {
    colors: {
        primary: '#ffffff',
        text: '#1d1d1d',
        focus: 'rgb(148, 82, 245)'
    },
    border: '1px solid #1d1d1d',
    borderTriangle: '25px solid #1d1d1d'
};

const darkTheme = {
    colors: {
        primary: '#1d1d1d',
        text: '#ffffff',
        focus: 'rgb(148, 82, 245)'
    },
    border: '1px solid #f0f2f5',
    borderTriangle: '25px solid #f0f2f5'
};


export const Theme = ({darkMode, children}) => {
    return <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>

}

