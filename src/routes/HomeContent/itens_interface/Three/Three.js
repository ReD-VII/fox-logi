
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'


// Styled




export function Three(props){
    
    // Esta referência nos dará acesso direto à malha
    const mesh = useRef()
    // Configura o estado para o estado pairado e ativo
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // Inscreva este componente no loop de renderização, gire a malha a cada quadro
    useFrame((state, delta) => (mesh.current.rotation.x += 0.008))
    useFrame((state, delta) => (mesh.current.rotation.y += 0.008))
    
    // Visualização de retorno, estes são elementos regulares three.js expressos em JSX
    return(
        <>
            <mesh
                {...props}
                ref={mesh}
                scale={active ? 1.5 : 1}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} wireframe wireframeLinewidth={0.5} roughness={1}/>
            </mesh>
        </>
    )
}