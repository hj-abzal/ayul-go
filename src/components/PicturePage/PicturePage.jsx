import React from 'react';
import s from './PicturePage.module.scss';
import {useTranslation} from "react-i18next";
import {VintageAnimation} from "../../animation/VintageAnimation";

export const PicturePage = (props) => {
    const {t} = useTranslation();
    return (
        <div className={s.wrapper}>
            <div className={`${s.container} ${props.positionReversed ? s.reversed : ''}`}>
                <div className={s.content}>
                    <h1> {t(props.title)}<br/></h1>
                    <span className={s.header}>
                    {t(props.description)}<br/>
            </span>
                </div>
                {
                    props.animation
                        ? <VintageAnimation picture={props.picture} className={s.animation}/>
                        : <img src={props.picture} style={{marginRight: '5rem'}} alt="animation"/>
                }
            </div>
        </div>
    );
};
