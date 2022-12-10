import React, {useEffect} from 'react';
import {gsap} from "gsap";

export const VintageAnimation = (props) => {
    useEffect(() => {
        gsap.timeline({ repeat:-1, repeatDelay:0, yoyo:true})
            .to('.m', {duration:(i)=>[0.8,1.3][i], y:-10266, ease:'steps(29)', stagger:-0.3}, 0)
            .to('.frog', {duration:2, scale:1.05, transformOrigin:'50% 50%', ease:'power2', onComplete:swapMask}, 0)

        let currentMask = 1;
        function swapMask(){
            if (currentMask === 3) currentMask = 1;
            else currentMask++;
            gsap.set('.m', {attr:{'href':'https://assets.codepen.io/721952/liquidMask'+currentMask+'.svg'}})
        }
    }, [])

    return (
        <svg className={props.className} viewBox="0 0 450 352" xmlns="http://www.w3.org/1500/svg">
            <mask id="m1">
                <image className="m" href="https://assets.codepen.io/721952/liquidMask1.svg" y="-1" width="630"
                       height="10620"/>
            </mask>
            <mask id="m2">
                <image className="m" className="m maskImg" href="https://assets.codepen.io/721952/liquidMask1.svg"
                       y="-1" width="630" height="10620"/>
            </mask>
            <image mask="url(#m2)" href={props.href} width="630" height="420"/>
            <g mask="url(#m1)">
                <image className="frog" href={props.href} width="630"
                       height="420"/>
            </g>
        </svg>
    );
};

