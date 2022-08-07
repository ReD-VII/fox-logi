import React, {useState, useEffect} from "react";
import { 
    BiHomeSmile,
    BiPackage,
    BiMessageSquareDots,
    BiUser,
    BiMessageSquareDetail,
    BiWorld,
} from "react-icons/bi";

import { 
    Menu, 
    Navigate, 
    MenuContent,
    MenuWidget
} from ".";

import { Link,  } from 'react-router-dom'


export default function MenuButton(){
    // Botao menu
    const [isActive, setIsActive] = useState(false)
    function click(){
        setIsActive(!isActive)
        console.log('Clicado')
    }
    useEffect(()=>{
        setIsActive(isActive)
    }, [isActive])
    

   
    return( 
        <>
            <Menu  onClick={click} isVisible={isActive} style={{zIndex: '100'}}>
                <span></span>
                <span></span>
                <span></span>
            </Menu>
            
            <Navigate isVisible={isActive}>
                <MenuWidget isVisible={isActive}> 
                    <div>

                        <Link to="/" style={{marginTop: '15px'}}><span onClick={click}><BiHomeSmile size={25} color={'#f5deb3a9'}/></span></Link>
                        
                        <Link to="/register" style={{marginTop: '15px'}}><span onClick={click}><BiPackage size={25} color={'#f5deb3a9'}/></span></Link>

                        <Link to="/socialcontent" style={{marginTop: '15px'}}><span onClick={click}><BiMessageSquareDots size={25} color={'#f5deb3a9'}/></span></Link>

                        <Link to="/"></Link><span><BiUser size={25} color={'#f5deb3a9'}/></span>
                        <Link to="/"></Link><span><BiMessageSquareDetail size={25} color={'#f5deb3a9'}/></span>
                        <Link to="/"></Link><span><BiWorld size={25} color={'#f5deb3a9'}/></span>
                        
                    </div>
                   
                </MenuWidget>
                <MenuContent isVisible={isActive}>
   
                </MenuContent>
            </Navigate>
        </>
    )
}



