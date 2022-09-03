import React from "react";
import s from './Icon.module.scss'
import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/icons/selection.json";


export const Icon = props => {
    const { color, size = "100%", icon, className = "", onClick } = props;
    return (
        <span onClick={onClick} className={onClick ? s.clickable : ''}>
            <IcomoonReact
                className={className}
                iconSet={iconSet}
                color={color}
                size={size}
                icon={icon}
            />
        </span>
    );
};
