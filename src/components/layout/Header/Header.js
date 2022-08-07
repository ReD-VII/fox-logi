import React from "react";
import avatar from './img/avatar.svg'
import style from './Header.module.css'
import { useState, useEffect } from "react";
// import { IoReorderTwoOutline } from "react-icons/io5";
import miniLogo from '../../../routes/Start/img/mini-logo.svg'
import styled from "styled-components";
import MenuButton from "./MenuButton/MenuButton";
export default function Headers({logged}){
    // Verificação de Login
    const [isLogin, setIsLogin] = useState()
    useEffect(()=>{
        setIsLogin(logged)
    })
    return(
        <header className={style.header_content}>
            <div className={style.header_box}>
                <div style={{zIndex: '100'}}>
                    <img src={miniLogo} alt="Logo Inicio"/>
                </div>
                <div>
                    {isLogin &&
                        <img src={avatar} alt="Avatar Usuario"/>
                    }
                    
                </div>
            </div>        
            <div className={style.header_box}></div>
            <div className={style.header_box}>
                    <MenuButton />                    
            </div>        
        </header>
    )
}