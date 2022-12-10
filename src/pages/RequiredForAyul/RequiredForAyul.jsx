import React from 'react';
import s from './RequiredForAyul.module.scss';
import {useTranslation} from "react-i18next";
import {Icon} from "../../components/Icon/Icon";
import {COLORS} from "../../components/Theme/Theme";
import auylOverview from '../../assets/videos/video.MP4'
import {Video} from "../../components/Video/Video";

export const RequiredForAyul = () => {
    const {t} = useTranslation();
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.bigMom}>
                    <h1>{t("REQUIRED_FO_AYUL.TITLE")}</h1>
                    <span className={s.header}>
                        {t("REQUIRED_FO_AYUL.OUR_ACTIONS")}
                    </span>
                </div>

                <div className={s.bossDiv}>
                    <div className={s.ball}>
                        <Icon
                            color={COLORS.focus}
                            size={100}
                            icon="number3"
                            className={s.ball_icon}/>
                        <span className={s.greyText}>{t("REQUIRED_FO_AYUL.FIRST_STEP")}</span>
                    </div>
                    <div className={s.ball}>
                        <Icon
                            color={COLORS.focus}
                            size={100}
                            icon="number2"
                            className={s.ball_icon}/>
                        <span className={s.greyText}>{t("REQUIRED_FO_AYUL.SECOND_STEP")}</span>
                    </div>
                    <div className={s.ball}>
                        <Icon
                            color={COLORS.focus}
                            size={100}
                            icon="number"
                            className={s.ball_icon}/>
                        <span className={s.greyText}>{t("REQUIRED_FO_AYUL.THIRD_STEP")}</span>
                    </div>
                </div>
            </div>
            <Video src={auylOverview}/>
        </div>
    );
};
