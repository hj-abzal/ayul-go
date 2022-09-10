import React, {useEffect, useRef} from 'react';
import s from './Mission.module.scss';
import {Container} from "../../components/Styled";
import {useTranslation} from "react-i18next";
import {gsap} from "gsap";

export const Mission = () => {
    const {t} = useTranslation();
    const el = useRef();

    useEffect(() => {

    })
    return (
        <Container className={s.wrapper}>
            <div className={s.content}>
                <h1> {t('MISSION.TITLE')}<br/></h1>
                <span className={s.header}>
                    {t('MISSION.WHO_WE_ARE')}<br/>
            </span>

            </div>
            <div onClick={() => {
                gsap.to(el.current, {
                    // полный поворот
                    rotation: '+=360'
                })
            }} ref={el} className={s.animation}>
            </div>
        </Container>
    );
};
