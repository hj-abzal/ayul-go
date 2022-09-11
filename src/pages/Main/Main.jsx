import React, {useEffect, useRef} from 'react';
import s from './Main.module.scss';
import {Container} from "../../components/Styled";
import {useTranslation} from "react-i18next";
import {Circle} from "../../animation/Circle/Circle";
import '../../animation/Circle/Circle.scss'

export const Main = () => {
    const {t} = useTranslation();
    const circleRefs = useRef([]);

    // reset on re-renders
    circleRefs.current = [];

    const onMove = ({clientX, clientY}) => {
        circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };

    useEffect(() => {
        circleRefs.current.forEach(ref => ref.moveTo(window.innerWidth / 2,  window.innerHeight / 2));
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    const addCircleRef = ref => {
        if (ref) {
            circleRefs.current.push(ref);
        }
    };
    return (
        <Container className={s.wrapper}>
            <div className={s.content}>
                <h1> {t('MAIN.TITLE')}<br/></h1>
                <span className={s.header}>
                    {t('MAIN.WHO_WE_ARE')}<br/>
                </span>
                <p className={s.greyText}>
                    {t('MAIN.WHAT_WE_DO')}
                    <span className={s.blueBg}> {t('MAIN.CREATE_WEBSITE')}</span>
                </p>
            </div>
            <div>
                <Circle size="sm" ref={addCircleRef} delay={0} />
                <Circle size="md" ref={addCircleRef} delay={0.1} />
                <Circle size="lg" ref={addCircleRef} delay={0.2} />
            </div>
        </Container>
    );
};
