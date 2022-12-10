import React from "react";
import video from "../../assets/videos/video.MP4";
import './Video.module.scss'


export const Video = (props) => {
    return (
        <video loop autoPlay muted>
            <source src={props.src}/>
        </video>
    )
}