import React from 'react'
import MainRouter from '../index_css'
import backgroundMAP from './img/bg-mapa.svg'
import style from './style.module.css'


// Interface
import { Three } from './itens_interface/Three/Three'
import { Canvas } from '@react-three/fiber'



function HomeContent(){
    return(
        <MainRouter>
            {/* <h1>Home page</h1> */}
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {/* <Three position={[-1.2, 0, 0]} /> */}
                <Three position={[0.9, 1, .5]} />
            </Canvas>
        </MainRouter>
    )


}
export default HomeContent