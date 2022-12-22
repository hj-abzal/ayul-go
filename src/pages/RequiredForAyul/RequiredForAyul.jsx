import React from 'react';
import s from './RequiredForAyul.module.scss';
import {useTranslation} from "react-i18next";
import {Icon} from "../../components/Icon/Icon";
import {COLORS} from "../../components/Theme/Theme";
import schoolVideo from '../../assets/videos/school.mp4'
import {Video} from "../../components/Video/Video";
import 'react-slideshow-image/dist/styles.css';

export const RequiredForAyul = () => {
    const {t} = useTranslation();
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.bigMom}>
                    <h1> №22 Бауыржан Момышұлы атындағы орта мектепке қош келдіңіздер!</h1>
                    <span className={s.header}>
                        "...Бауыржандай батыр бол, Шерхандай рухты бол"
                    </span>
                </div>

                <div className={s.bossDiv}>
                    <div className={s.ball}>
                        <Icon
                            color={COLORS.focus}
                            size={100}
                            icon="number3"
                            className={s.ball_icon}/>
                        <span className={s.greyText}>2004 жылы Шерхан Мұртаза салды. 103 оқушы.</span>
                    </div>
                    <div className={s.ball}>
                        <Icon
                            color={COLORS.focus}
                            size={100}
                            icon="number2"
                            className={s.ball_icon}/>
                        <span className={s.greyText}>Үйірмелер: Бокс,би,волейбол,<br/>футбол. <br/> Бауыржан Момышұлы мұражайы</span>
                    </div>
                    <div className={s.ball}>
                        <Icon
                            color={COLORS.focus}
                            size={100}
                            icon="number"
                            className={s.ball_icon}/>
                        <span className={s.greyText}>Түлектер: <br/> Шерхан Мұртаза,<br/> Жалғас Мұртаза, <br/> Бекмұрат Аманқұлұлы</span>
                    </div>
                </div>
            </div>
            <Video src={schoolVideo}/>
        </div>
    );
};
