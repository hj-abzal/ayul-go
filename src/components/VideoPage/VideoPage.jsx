import React, {useEffect, useRef} from 'react';
import s from './VideoPage.module.scss';
import {Container} from "../Styled";
import {useTranslation} from "react-i18next";
import {Circle} from "../../animation/Circle/Circle";
import '../../animation/Circle/Circle.scss'
import {Video} from "../Video/Video";
import {gsap} from "gsap";

export const VideoPage = (props) => {

    const {t} = useTranslation();
    const circleRefs = useRef([]);

    // reset on re-renders
    circleRefs.current = [];

    const onMove = ({clientX, clientY}) => {
        circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };

    useEffect(() => {
        circleRefs.current.forEach(ref => ref.moveTo(window.innerWidth / 2, window.innerHeight / 2));
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    useEffect(() => {
        let textAnimation = gsap.timeline();
        textAnimation.from('.text', {
            y: 100,
            stagger: {
                each: 0.3
            }
        });
    }, []);

    const addCircleRef = ref => {
        if (ref) {
            circleRefs.current.push(ref);
        }
    };

    const typing = t('MAIN.TITLE').split('').map((l, i) => {
        let trimmedL = l.trim();
        if (trimmedL) {
            return <div key={i} className='text'>{l}</div>
        }
        return <div key={i} className='text'>&nbsp;</div>
    })

    return (
        <Container className={s.wrapper}>
            <Video src={props.videoSrc}/>
            <div className={s.content}>
                <div className={s.letters}>
                    {typing}
                </div>
            </div>
            <div>
                <Circle size="sm" ref={addCircleRef} delay={0}/>
                <Circle size="md" ref={addCircleRef} delay={0.1}/>
                <Circle size="lg" ref={addCircleRef} delay={0.2}/>
            </div>
        </Container>
    );
};
