
import styled, {css} from "styled-components";

export const Menu = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    // Content
    position: relative;
    width: 28px;
    height: 28px;
    margin-top: -80px;
    margin-right: 15px;
    /* box-shadow:  0 10px 20px rgba(0,0,0,0.8); */
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    // Linhas
    span{
        position: absolute;
        width: 22px;
        height: 2px;
        background: #f5deb3;
        border-radius: 2px;
        transition: .5s;
    }
    span:nth-child(1){
        width: 18px;
        right: 3px;
        transform:  translateY(-7px);
    }
    span:nth-child(2){
        width: 14px;
        right: 3px;
        transform:  translateY(7px);
    }
    span:nth-child(3){

        right: 3px;

    }

    /* CASO ATIVADO */
    ${({isVisible}) => isVisible && css`
        /* EFEITO BOTAO FECHAR X */
        &:after{
            content: "";
            position: absolute;
            width: 22px;
            height: 22px;
            border: 2px solid rgba(245, 222, 179, 0.247);
            border-left: none;
            border-radius: 50px;
            animation: menuEfect 1s ease infinite;
            z-index: 100;
        }
        @keyframes menuEfect {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg)
            }
        }
        span:nth-child(1){
            width: 20px;
            height: 3px;
            transform: translateY(0px) rotate(45deg);
            right: 4px;
        }
        span:nth-child(2){
            width: 20px;
            height: 3px;
            transform: translateY(0px) rotate(315deg);
            right: 4px;
        }

        span:nth-child(3){

            transform:  translateX(60px);
        }
    
    `}
`

export const Navigate = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 0%;
    height: 0vh;
    top: 0;
    right: 0;
    transition: .5s;
    border-radius: 50px;
    border-top-right-radius: 0;
    
    ${({isVisible})=>isVisible && css`
        width: 100%;
        height: 100vh;
        border-radius: 0px;
    `}
    
`

export const MenuContent = styled.div`
    width: 80%;
    height: 100vh;
    border-left: 0rem solid #f5deb367;
    background: black;
    ${({isVisible})=> isVisible && css`
        border-left: .01rem solid #f5deb32c;
    
    `}
`

export const MenuWidget = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    height: 100vh;
    background: #0104096b;
    overflow: hidden;
    transition: .5s;


    div{
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 40%;
        /* background: violet; */
    }
    span{
        /* margin: 10px; */
        margin-top: 15px;

        opacity: 0;
        transition: .5s;

    }    
    ${({isVisible})=> isVisible && css`
        span{
            animation: iconsAnimation .5s ease-in-out forwards;

        }
        @keyframes iconsAnimation {
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }
    `}

`