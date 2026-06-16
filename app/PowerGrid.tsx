"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function PowerGrid() {
  const ref = useRef<THREE.InstancedMesh>(null!);
  const SIZE = 12;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const cells = useMemo(
    () => Array.from({ length: SIZE * SIZE }, (_, i) => ({
      x: (i % SIZE) - SIZE / 2, z: Math.floor(i / SIZE) - SIZE / 2, h: Math.random() * 1.5 + 0.2,
    })), []
  );
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    cells.forEach((c, i) => {
      const pulse = 0.5 + Math.sin(t * 2 + c.x + c.z) * 0.5;
      dummy.position.set(c.x * 0.9, c.h * pulse - 1.5, c.z * 0.9);
      dummy.scale.set(0.08, c.h * pulse, 0.08);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
    ref.current.rotation.y = t * 0.05;
  });
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, SIZE * SIZE]}>
      <boxGeometry />
      <meshStandardMaterial color="#0a2230" emissive="#00D9FF" emissiveIntensity={1.4} />
    </instancedMesh>
  );
}
