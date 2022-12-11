import styles from './App.module.scss';
import {VideoPage} from "./components/VideoPage/VideoPage";
import {Header} from "./components/Header/Header";
import {Theme} from "./components/Theme/Theme";
import {useEffect, useState} from "react";
import {GlobalStyles} from "./components/Styled";
import './assets/i18n/i18n';
import {PicturePage} from "./components/PicturePage/PicturePage";
import {RequiredForAyul} from "./pages/RequiredForAyul/RequiredForAyul";
import auylPhoto from './assets/photos/dji_fly_20221210_150014_102_1670662898990_photo.JPG'
import studentsPhoto from './assets/photos/IMG_5417.JPG'

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
                <VideoPage/>
                <PicturePage
                    title='Талапты ауылына қош келдіңіздер!'
                    picture={auylPhoto}
                    description={'Талапты ауылы Жамбыл облысы, Жуалы ауданында орналасқан. Ауылда 650-ден астам тұрғындар тұрады. Біздің ауылда ұлы тұлғалар және танымыл спортшылар шыққан: Шерхан Мұртаза - қоғам қайраткері, халық жасушысы. Әбілхан Аманқұл - Қазақстан ұлттық құрамасының кәсіби боксшысы. Зерекбай Әліқұлов - биология ғылымдарының кандитаты. Жалғас Мұртаза - Жуалы ауданының әкімі.'}
                    animation
                />
                <RequiredForAyul/>
                <PicturePage
                    title={'Оқушылардың нәтижесі'}
                    picture={studentsPhoto}
                    description={'2022 жылдың желтоқсан айының 10-11 күндері біз №22 мектеп оқушылары Ayul.go командасымен сайт жасауды үйрендік. Javascript,HTML, CSS терминдерімен таныстық. Ал екінші күні электронды шақырту жасадық. Осы екі күн біз үшін пайдалы әрі әсерлі болды.'}
                    positionReversed
                />
            </div>
        </Theme>
    );
}

export default App;

