import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Cert = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  decal.minFilter = THREE.NearestFilter;
  decal.magFilter = THREE.NearestFilter;
  decal.anisotropy = 32;

  return (
    <Float speed={3.2} rotationIntensity={1.5} floatIntensity={4}>
      <ambientLight intensity={10} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow recieveShadow scale={[4, 3, 1]}>
        <boxGeometry args={[0.75,0.75, 0.5]} />
        <meshStandardMaterial color="#ffffff" polygonOffset={false} flatShading
            opacity={0.9} 
            position={[100, 400, 180]}
        />
        <Decal
          position={[0, 0, 0.25]} 
          rotation={[2 * Math.PI, 0, 6.25]}     
          scale={[0.9, 0.83, 0.18]}        
          map={decal}              
          flatShading
        />
      </mesh>
    </Float>
  )
}

const CertCanvas = ({ icon }) => {
  return (
    <Canvas
      frameLoop = "demand"
      camera={{ position: [0, 4, 12], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 6}
          maxAzimuthAngle = { Math.PI / 3}  
          minAzimuthAngle = {- Math.PI / 3}
        />
        <Cert imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default CertCanvas