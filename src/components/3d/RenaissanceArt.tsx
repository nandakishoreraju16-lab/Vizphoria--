import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense, useState, useEffect } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Loading component
const Loader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-pulse">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full"></div>
    </div>
  </div>
);

// 3D Model Component
function RenaissancePainting() {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Smooth animation on each frame
  useFrame((state) => {
    if (!group.current) return;
    
    // Gentle floating animation
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    // Scale on hover
    const targetScale = hovered ? 1.1 : 1;
    group.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Painting Frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.5, 3.5, 0.2]} />
        <meshStandardMaterial color="#8B5A2B" metalness={0.1} roughness={0.7} />
      </mesh>
      
      {/* Canvas */}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[2.3, 3.3]} />
        <meshStandardMaterial 
          color="#f5f5dc" 
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      {/* Ornate corners */}
      {[
        [-1.2, 1.7, 0.11],
        [1.2, 1.7, 0.11],
        [-1.2, -1.7, 0.11],
        [1.2, -1.7, 0.11],
      ].map((position, i) => (
        <mesh key={i} position={position as [number, number, number]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#DAA520" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

// Main 3D Scene
function RenaissanceArt() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simple error boundary effect
  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error('3D Render Error:', error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">3D content could not be loaded</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full" style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
              enableDamping
              dampingFactor={0.05}
            />
            <RenaissancePainting />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export default RenaissanceArt;
