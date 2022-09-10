import React from 'react';
import s from './Header.module.scss';
import {Icon} from "../Icon/Icon";
import {Language} from "../Language/Language";

export const Header = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <h2>
                    <Icon
                        color="white"
                        size={50}
                        icon="instagram"
                        className={s.iconInst}
                    />
                    <a href="https://www.instagram.com/ayul.go/" target='_blank'> @ayul.go</a>
                </h2>
                <div className={s.actionIcons}>
                    <Icon
                        onClick={props.changeTheme}
                        color="black"
                        size={50}
                        icon="theme"
                        className={s.icon}
                    />
                    <Language/>
                </div>
            </div>
        </div>
    );
};

