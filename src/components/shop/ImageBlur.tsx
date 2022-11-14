import {useEffect, useRef, useState} from "react";
import style from "./Shop.module.css"
interface ImageBlurProps{
 src: string
}


export default function ImageBlur(props: ImageBlurProps){
    const {src} = props


    return (
        <div className={style.bluredImage} style={{backgroundImage:   `url(${src})`}}>
{/*
            <canvas id="canvas" width="400" height="150" ref={canvasRef}></canvas>
*/}

        </div>
    )
}