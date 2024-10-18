import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <SpotLight
        position = {[0, 14, -0.5]}
        angle={0.40}
        penumbra={1.5}
        intensity={7000}
        distance={24}
        castShadow
        shadow-mapSize={1024}
      />
      <hemisphereLight intensity={0.3}
      groundColor="black" />
      <pointLight intensity={5} />
      
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [-1, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.01]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobie, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);
  
  return (
    <Canvas
      frameLoop = "demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobie} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;