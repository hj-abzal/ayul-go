import React from 'react';
import s from './RequiredForAyul.module.scss';
import {Container} from "../../components/Styled";
import {useTranslation} from "react-i18next";
import {Icon} from "../../components/Icon/Icon";

export const RequiredForAyul = () => {
    const {t} = useTranslation();
    return (
        <Container className={s.wrapper}>
            <div className={s.content}>
                <div className={s.bigMom}>
                <h1>{t("REQUIRED_FO_AYUL.TITLE")}</h1>
                    <span className={s.header}>
                        Каковы наши действия?
                    </span>
                </div>

                <div className={s.bossDiv}>
                    <div className={s.ball}>
                        <Icon
                            color="#007FFFFF"
                            size={100}
                            icon="number3"
                            className={s.ball_icon}/>
                        <h2>
                            Запланировать время и место встречи.
                            Выбор происходит на основе приглашений местных жителей.
                        </h2>
                    </div>
                    <div className={s.ball}>
                         <Icon
                            color="#007FFFFF"
                            size={100}
                            icon="number2"
                            className={s.ball_icon}/>
                        <h2>
                            Нам нужно на месте: заинтересованные взрослые и группа подростков на 15-20 человек.
                        </h2>
                    </div>
                    <div className={s.ball}>
                        <Icon
                            color="#007FFFFF"
                            size={100}
                            icon="number"
                            className={s.ball_icon}/>
                        <h2>
                            Найти место для проведения урока. (напр. кабинет информатики в школе)
                        </h2>
                    </div>
                </div>
            </div>
        </Container>
    );
};
