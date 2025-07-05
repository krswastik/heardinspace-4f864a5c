
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[0.5, 0.5, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial color="#ff6b35" wireframe />
    </mesh>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[0.3, 0.3, 0.3]}>
      <sphereGeometry />
      <meshStandardMaterial color="#00d4ff" wireframe />
    </mesh>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.6;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * 1.2) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.3, 0.1, 16, 32]} />
      <meshStandardMaterial color="#ff6b35" />
    </mesh>
  );
};

const Space3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <FloatingCube position={[-3, 2, -2]} />
        <FloatingCube position={[4, -1, -3]} />
        <FloatingSphere position={[2, 3, -1]} />
        <FloatingSphere position={[-4, -2, -4]} />
        <FloatingTorus position={[0, -3, -2]} />
        <FloatingTorus position={[3, 1, -5]} />
      </Canvas>
    </div>
  );
};

export default Space3D;
