import styles from './App.module.scss';
import {VideoPage} from "./components/VideoPage/VideoPage";
import {Header} from "./components/Header/Header";
import {Theme} from "./components/Theme/Theme";
import {useEffect, useState} from "react";
import {GlobalStyles} from "./components/Styled";
import './assets/i18n/i18n';
import {PicturePage} from "./components/PicturePage/PicturePage";
import {RequiredForAyul} from "./pages/RequiredForAyul/RequiredForAyul";

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
                <VideoPage videoSrc={''}/>
                <PicturePage
                    title={'Талапты ауылына қош келдіңіздер!'}
                    picture={'https://forbes.kz/img/articles/108b818d1df2249ce42add390ef4ecac-big.jpg'}
                    description={'Талапты ауылы Жамбыл облысы, Жуалы ауданында орналасқан. Ауылда 650-ден астам тұрғындар тұрады. Біздің ауылдан ұлы тұлғалар және танымал спортшылар шыққан: Шерхан Мұртаза-қоғам қайраткері, халық жазушысы. Әбілхан Аманқұл-Қазақстан ұлттық құрамасының кәсіби боксшысы. Зерекбай Әліқұлов-биология ғылымдарының кандидаты. Жалғас Мұртаза-Жуалы ауданының әкімі.'
                        }
                    animation
                />
                <RequiredForAyul/>
                <PicturePage
                    title={'MISSION.TITLE'}
                    picture={'https://forbes.kz/img/articles/108b818d1df2249ce42add390ef4ecac-big.jpg'}
                    description={'MISSION.OUR_GOAL'}
                    positionReversed
                />
            </div>
        </Theme>
    );
}

export default App;

