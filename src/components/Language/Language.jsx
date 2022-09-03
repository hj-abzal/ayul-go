import React, {useEffect, useRef, useState} from 'react';
import s from './Language.module.scss';
import {Icon} from "../Icon/Icon";
import {BackgroundDifferent} from "../Styled";
import {useOutsideAlerter} from "../../Hooks/useOutsideClick";
import {useTranslation} from "react-i18next";

export const Language = () => {
    const [selectedLang, setSelectedLang] = useState("ru");
    const [editMode, setEditMode] = useState(false);
    const ref = useRef(null);
    const {i18n} = useTranslation();

    useEffect(() => {
        const lang = localStorage.getItem('lang-key')
        if (lang) {
            setSelectedLang(lang)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lang-key', selectedLang)
    }, [selectedLang]);

    useOutsideAlerter(() => {
        setTimeout(() => {
            setEditMode(false);
        }, 200)
    }, ref)

    const langs = [
        {id: 1, label: 'kz'},
        {id: 2, label: 'ru'},
        {id: 3, label: 'eng'},
    ];

    const changeLange = (label) => {
        if (label !== selectedLang) {
            setSelectedLang(label);
            i18n.changeLanguage(label);

            setTimeout(() => {
                setEditMode(false);
            }, 400)
        }
    }


    return (
        <div className={s.wrapper}>
            <Icon
                onClick={() => setEditMode(!editMode)}
                color="#f0f2f5"
                size={30}
                icon="language"
            />
            {
                editMode && (
                    <div className={s.languages} ref={ref}>
                        {
                            langs.map((l) => (
                                <BackgroundDifferent
                                    onClick={() => changeLange(l.label)}
                                    key={l.id}
                                    className={selectedLang === l.label ? s.activeLang : s.lang}
                                >
                                    {l.label}
                                </BackgroundDifferent>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};




