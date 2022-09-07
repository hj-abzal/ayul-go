import React from 'react';
import s from './RequiredForAyul.module.scss';
import {Container} from "../../components/Styled";
import {useTranslation} from "react-i18next";

export const RequiredForAyul = () => {
    const {t} = useTranslation();
    return (
        <Container className={s.wrapper}>
            <div className={s.content}>
                <h1>{t("REQUIRED_FO_AYUL.TITLE")}</h1>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </Container>
    );
};
