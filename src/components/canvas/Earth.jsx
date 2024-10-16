import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.3}
      groundColor="black" />
      <pointLight intensity={5} />
      
      <primitive 
        object={earth.scene}
        scale={2.2}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}
const EarthCanvas = () => {
  
  return (
    <Canvas
      shadows
      frameLoop = "demand"
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default EarthCanvas;