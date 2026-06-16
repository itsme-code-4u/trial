"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import EnergyParticles from "./EnergyParticles";
import PowerGrid from "./PowerGrid";

function RigCamera() {
  const { camera, pointer } = useThree();
  useFrame((_, dt) => {
    camera.position.x += (pointer.x * 2 - camera.position.x) * Math.min(1, dt * 2);
    camera.position.y += (pointer.y * 1.2 + 1 - camera.position.y) * Math.min(1, dt * 2);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function EnergyNode({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => ref.current.scale.setScalar(1 + Math.sin(s.clock.elapsedTime * 3) * 0.15));
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial color="#00D9FF" emissive="#00FFF0" emissiveIntensity={2} wireframe />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const [dpr, setDpr] = useState(1.5);
  return (
    <Canvas className="!absolute inset-0" dpr={dpr} gl={ { antialias: true, powerPreference: "high-performance" } } camera={ { position: [0, 1, 8], fov: 50 } }>
      <PerformanceMonitor onDecline={() => setDpr(1)} />
      <AdaptiveDpr pixelated />
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 8, 22]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={40} color="#00D9FF" />
      <pointLight position={[-5, -3, 2]} intensity={30} color="#7A5CFF" />
      <Suspense fallback={null}>
        <PowerGrid />
        <EnergyParticles count={1500} />
        <EnergyNode position={[-2.5, 0.5, 0]} />
        <EnergyNode position={[2.4, -0.3, -1]} />
        <EnergyNode position={[0, 1.5, -2]} />
        <Environment preset="city" />
      </Suspense>
      <RigCamera />
    </Canvas>
  );
}
