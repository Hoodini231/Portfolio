import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./route_1/scene.gltf');
  const character = useGLTF('./magnemite/scene.gltf');
  const lucario = useGLTF('./lucario/scene.gltf');
  const ref = useRef();
  let direction = 1;
  const speed = 0.07;
  
  const minRotation = 0.17; // 10 degrees in radians
  const maxRotation = 1.05; // 60 degrees in radians

  const directionRef = useRef(1); // Store direction persistently

  useFrame((state, delta) => {
    if (ref.current) {
      // Apply rotation
      ref.current.rotation.y += directionRef.current * delta * speed;
  
      // Reverse direction when hitting limits
      if (ref.current.rotation.y > maxRotation) {
        ref.current.rotation.y = maxRotation; // Stop exactly at max
        directionRef.current = -1; // Reverse direction
      }
      if (ref.current.rotation.y < minRotation) {
        ref.current.rotation.y = minRotation; // Stop exactly at min
        directionRef.current = 1; // Reverse direction
      }
    }
  });

  return (
    <mesh ref={ref}>
      <directionalLight
        position={[10, 20, 10]}
        intensity={4.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={5} />

      {/* Background (Computers / Route_1) */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.1 : 0.36}
        position={isMobile ? [0, -3.25, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, 0.5, -0.01]}
      />
      <primitive
        object={character.scene}
        scale={isMobile ? 0.0038 : 0.0038}
        position={isMobile ? [4.8, -2.35, 1.8] : [4.8, -2.35, 1.8]}
        rotation={[-0.01, 0.5, -0.01]}
      />
      <primitive
      object={lucario.scene}
      scale={isMobile ? 0.8 : 0.8}
      position={isMobile ? [3.8, -2.77, 5.8] : [3.8, -2.77, 5.8]}
      rotation={[-0.01, 3.5, -0.01]}
    />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [25, -5, -5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 2.1}
          minAzimuthAngle={Math.PI / 18} // 10 degrees
          maxAzimuthAngle={Math.PI / 2}  // 60 degrees
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
