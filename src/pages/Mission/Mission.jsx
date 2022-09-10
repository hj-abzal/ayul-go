import React from 'react';
import s from './Mission.module.scss';
import {Container} from "../../components/Styled";
import {useTranslation} from "react-i18next";
import {VintageAnimation} from "../../animation/Vintage/VintageAnimation";

export const Mission = () => {
    const {t} = useTranslation();

    return (
        <Container className={s.wrapper}>
            <div className={s.content}>
                <h1> {t('MISSION.TITLE')}<br/></h1>
                <span className={s.header}>
                    {t('MISSION.OUR_GOAL')}<br/>
            </span>
            </div>
            <VintageAnimation className={s.animation}/>
        </Container>
    );
};
