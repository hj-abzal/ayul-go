import React, {useEffect, useRef} from 'react';
import s from './Main.module.scss';
import {Container} from "../../components/Styled";
import {useTranslation} from "react-i18next";

export const Main = () => {
    const { t } = useTranslation();
    const el = useRef();

    useEffect(() => {

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

            </div>
        </Container>
    );
};
