import React from 'react';
import s from './Header.module.scss';
import {Icon} from "../Icon/Icon";

export const Header = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <h2>
                    <a href="https://www.instagram.com/auyl.go/" target='_blank'>
                        <Icon
                            color="white"
                            size={50}
                            icon="instagram"
                            className={s.iconInst}
                        />  @auyl.go
                    </a>
                </h2>
                <div className={s.actionIcons}>
                    {/*<Language/>*/}
                </div>
            </div>
        </div>
    );
};

