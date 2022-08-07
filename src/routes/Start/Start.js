import React from "react";
import style from './Start.module.css'
import miniLogo from './img/mini-logo.svg'





export default function Start(){


    return(
        <div className={style.start_content}>

            <div className={style.logo_box}><img src={miniLogo} alt="Logo Inicio"/></div>

        </div>   
    )
}