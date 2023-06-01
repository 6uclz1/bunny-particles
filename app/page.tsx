"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Model } from "../Model";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 2 }}>
        <color attach="background" args={["#202025"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Center>
          <Model position={[0, 0, 1]} />
        </Center>

        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
