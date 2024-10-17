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
      }>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader