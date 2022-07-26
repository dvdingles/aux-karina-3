import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
import Solo from '../components/Solo'



const Home: NextPage = () => {
  return (
    <div style={{width: '555', height: '777px', border: 'solid 2px #eee', backgroundColor: '#f5f5f5'}}>
    <Canvas camera={{zoom: 6, position:[1, .5 , -1]}} >
      {/* <focus-camera> */}
      <ambientLight intensity={.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Solo position={[0,0,0]}/>
      </Suspense>
      <OrbitControls />
    </Canvas>
  </div>

  )
}



export default Home
