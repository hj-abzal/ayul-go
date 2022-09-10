import React, { useEffect, useRef } from 'react';
import s from './Main.module.scss';
import { Container } from "../../components/Styled";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

export const Main = () => {
    const { t } = useTranslation();
    const el = useRef();

    useEffect(() => {
            gsap.timeline({ repeat:-1, repeatDelay:0, yoyo:true})
            .to('.m', {duration:(i)=>[0.8,1.3][i], y:-10266, ease:'steps(29)', stagger:-0.3}, 0)
            .to('.frog', {duration:2, scale:1.1, transformOrigin:'50% 50%', ease:'power2', onComplete:swapMask}, 0)
        
            let currentMask = 1;
            function swapMask(){
            if (currentMask==3) currentMask = 1;
            else currentMask++;
            gsap.set('.m', {attr:{'href':'https://assets.codepen.io/721952/liquidMask'+currentMask+'.svg'}})
        }
    })
    return (
        <Container className={s.wrapper}>
            <div className={s.content}>
                <h1> {t('MAIN.TITLE')}<br /></h1>
                <span className={s.header}>
                    {t('MAIN.WHO_WE_ARE')}<br />
                </span>
                <p className={s.greyText}>
                    {t('MAIN.WHAT_WE_DO')}
                    <span className={s.blueBg}> {t('MAIN.CREATE_WEBSITE')}</span>
                </p>
            </div>
            <div ref={el} className={s.animation}>
                <svg viewBox="0 0 630 352" xmlns="http://www.w3.org/2000/svg">
                    <mask id="m1">
                        <image class="m" href="https://assets.codepen.io/721952/liquidMask1.svg" y="-1" width="630" height="10620" />
                    </mask>
                    <mask id="m2">
                        <image class="m" className="maskImg" href="https://assets.codepen.io/721952/liquidMask1.svg" y="-1" width="630" height="10620" />
                    </mask>
                    <image mask="url(#m2)" href="https://images.unsplash.com/photo-1597626564517-426e3c39ebbe?auto=format&fit=crop&w=1260&q=50" width="630" height="420" />
                    <g mask="url(#m1)">
                        <image class="frog" href="https://images.unsplash.com/photo-1597626564517-426e3c39ebbe?auto=format&fit=crop&w=1260&q=50" width="630" height="420" />
                    </g>
                </svg>
            </div>
        </Container>
    );
};
