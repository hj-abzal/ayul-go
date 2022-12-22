import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.scss'
import {Slide} from 'react-slideshow-image';


export const Slideshow = (props) => {
    const indicators = (index) => (<div className="indicator">*</div>);

    return (
        <Slide infinite={false} indicators={indicators} cssClass={`slider-styles`}>
            {props.views.map((v, i) => {
                return <div key={i} className="each-slide-effect">
                    <div style={{'backgroundImage': `url(${v?.backgroundImage})`}}>
                        <img src="" alt=""/>
                        {v.component}
                    </div>
                </div>
            })}
        </Slide>
    );
};

