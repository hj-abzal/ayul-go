import styles from './App.module.scss';
import {Main} from "./pages/main/Main";
import {Header} from "./components/Header/Header";
import {Theme} from "./components/Theme/Theme";
import {useEffect, useState} from "react";
import {GlobalStyles} from "./components/Styled";
import './assets/i18n/i18n';

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
            </div>
        </Theme>
    );
}

export default App;

