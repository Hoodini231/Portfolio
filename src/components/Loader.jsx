import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p style= {
        {
          color: 'white',
          fontSize: '16px',
          fontFamily: 'Nunito',
          fontWeight: 'bold',
          marginTop: '40px',
        }
      }>Model Loading...</p>
    </Html>
  )
}

export default Loader