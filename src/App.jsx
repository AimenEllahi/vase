import ModelViewerComponent from "./Components/ModelViewerComponent";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Viewer from "./Components/Viewer";
const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Canvas>
        <OrbitControls />
        <Stage>
          <Viewer />
        </Stage>
      </Canvas>
    </div>
  );
};

export default App;
