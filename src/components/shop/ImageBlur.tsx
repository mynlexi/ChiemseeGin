import {useEffect, useRef, useState} from "react";
import style from "./Shop.module.css"
import premium from "../../../public/images/products/premiumGin.jpg"
import alpen from "../../../public/images/products/alpengluehen-min-min.webp"
interface ImageBlurProps{
 sorte: string
}


export default function ImageBlur(props: ImageBlurProps){
    const {sorte} = props

console.log(sorte, typeof sorte)
    return (
        <div className={style.bluredImage} style={{backgroundImage:   `url(${sorte == "alpen" ? alpen : premium})`}}>
{/*
            <canvas id="canvas" width="400" height="150" ref={canvasRef}></canvas>
*/}

        </div>
    )
}