import React, {useState} from 'react';
import s from './Language.module.scss';
import {Icon} from "../Icon/Icon";

export const Language = (props) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className={s.wrapper}>
            <Icon
                // onClick={() => setEditMode(!editMode)}
                color="#f0f2f5"
                size={35}
                icon="language"
                className={s.icon}
            />
            {
                editMode && <div className={s.languages}>
                    <div>Каз</div>
                    <div>Ru</div>
                </div>
            }

        </div>
    );
};

