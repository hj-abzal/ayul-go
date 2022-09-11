import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import './Circle.scss'
import {gsap} from "gsap";

export const Circle = forwardRef(({ size, delay }, ref) => {
    const el = useRef();

    useImperativeHandle(ref, () => {
        return {
            moveTo(x, y) {
                x = x + 70
                gsap.to(el.current, { x, y, delay });
            }
        };
    }, [delay]);

    return <div className={`circle ${size}`} ref={el}></div>;
});