import React from 'react';
import s from './RecuiredForAyul.module.scss';
import {Container} from "../../components/Styled";
import {useTranslation} from "react-i18next";

export const RecuiredForAyul = () => {
    const {t} = useTranslation();
    return (
        <Container className={s.wrapper}>
            <div className={s.content}>
                <h1>Едем в Ауыл!</h1>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </Container>
    );
};
