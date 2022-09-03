import React from 'react';
import s from './Main.module.scss';
import {Container} from "../../components/Styled";

export const Main = () => {
    return (
        <Container className={s.wrapper}>
            <div className={s.content}>
                <h1>
                    Ayul-go - it&nbsp;проект. <br/>
                    Мы приезжаем туда, откуда принято уезжать <br/>
                    — в&nbsp;небольшие города, сёла и&nbsp;деревни.
                </h1>
                <p className={s.greyText}>
                    Проводим бесплатные учебные программы,<br/>
                    общаемся с&nbsp;местными подростками, учимся и
                    <span className={s.blueBg}> создаём&nbsp;сайты.</span>
                </p>
            </div>
        </Container>
    );
};
