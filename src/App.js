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
                <VideoPage videoSrc={'https://tenor.com/ru/view/ronaldo-gif-23789663'}/>
                <PicturePage
                    title={'MISSION.TITLE'}
                    picture={'https://forbes.kz/img/articles/108b818d1df2249ce42add390ef4ecac-big.jpg'}
                    description={'MISSION.OUR_GOAL'}
                    animation
                />
                <RequiredForAyul/>
                <PicturePage
                    title={'Оқушылардың нәтижесі'}
                    picture={'https://forbes.kz/img/articles/108b818d1df2249ce42add390ef4ecac-big.jpg'}
                    description={'2022 жылдың желтоқсан айының 10-11 күндері біз №22 мектеп оқушылары Ayul.go командасымен сайт жасауды үйрендік. Javascript,HTML, CSS терминдерімен таныстық.  Ал екінші күні электронды шақырту жасадық.Осы екі күн біз үшін пайдалы әрі әсерлі болды.'}
                    positionReversed
                />
            </div>
        </Theme>
    );
}

export default App;

