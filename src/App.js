import styles from './App.module.scss';
import {Main} from "./pages/main/Main";
import {Header} from "./components/Header/Header";
import {createGlobalStyle} from "styled-components";
import {Theme} from "./components/Theme/Theme";
import {useEffect, useState} from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme-isDarkMode')
        if (theme) {
            setIsDarkMode(JSON.parse(theme))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme-isDarkMode', isDarkMode.toString())
    }, [isDarkMode])

    const changeTheme = () => {
        setIsDarkMode(!isDarkMode)
    };

    return (
        <Theme darkMode={isDarkMode}>
            <div className={styles.parent}>
                <GlobalStyles/>
                <Header changeTheme={changeTheme}/>
                <Main/>
                <Main/>
                <Main/>
                <Main/>
            </div>
        </Theme>
    );
}

export default App;


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    transition: all 0.45s linear;
  }`