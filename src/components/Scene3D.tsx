import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
  geometry?: 'icosahedron' | 'octahedron' | 'dodecahedron' | 'torus';
}

function FloatingShape({ 
  position, 
  color, 
  speed = 1, 
  distort = 0.3, 
  scale = 1,
  geometry = 'icosahedron'
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const geometryComponent = useMemo(() => {
    switch (geometry) {
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      default:
        return <icosahedronGeometry args={[1, 1]} />;
    }
  }, [geometry]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometryComponent}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed * 2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00bfa6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

interface Scene3DProps {
  className?: string;
}

export function Scene3D({ className }: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00bfa6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0088cc" />
        
        <FloatingShape 
          position={[-4, 2, -2]} 
          color="#00bfa6" 
          speed={0.5} 
          scale={1.5}
          geometry="icosahedron"
        />
        <FloatingShape 
          position={[4, -1, -3]} 
          color="#0088cc" 
          speed={0.7} 
          scale={1.2}
          geometry="octahedron"
        />
        <FloatingShape 
          position={[-2, -3, -1]} 
          color="#00d4aa" 
          speed={0.4} 
          scale={0.8}
          geometry="dodecahedron"
        />
        <FloatingShape 
          position={[3, 3, -4]} 
          color="#00a896" 
          speed={0.6} 
          scale={1}
          geometry="torus"
        />
        <FloatingShape 
          position={[0, 0, -5]} 
          color="#00bfa6" 
          speed={0.3} 
          scale={2}
          distort={0.4}
          geometry="icosahedron"
        />
        
        <ParticleField />
      </Canvas>
    </div>
  );
}
