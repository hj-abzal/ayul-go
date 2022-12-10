import React, {useEffect, useRef} from 'react';
import s from './VideoPage.module.scss';
import {Container} from "../Styled";
import {useTranslation} from "react-i18next";
import {Circle} from "../../animation/Circle/Circle";
import '../../animation/Circle/Circle.scss'

export const VideoPage = (props) => {

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
            <video loop autoPlay muted className={s.video}>
                <source src={props.video}/>
            </video>
            <div className={s.content}>
               <div className={s.content}><h1>{t("MAIN.TITLE")}</h1></div>
            </div>
            <div>
                <Circle size="sm" ref={addCircleRef} delay={0} />
                <Circle size="md" ref={addCircleRef} delay={0.1} />
                <Circle size="lg" ref={addCircleRef} delay={0.2} />
            </div>
        </Container>
    );
};
