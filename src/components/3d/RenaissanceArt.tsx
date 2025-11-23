import { Canvas } from '@react-three/fiber';
import { useRef, Suspense, useState, useEffect } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

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
  
  // Animation on hover
  const [spring, set] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 500, friction: 40 }
  }));

  // Handle mouse move for parallax effect
  const handleMouseMove = (e: any) => {
    if (!group.current) return;
    
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    
    set({
      rotation: [y * 0.2, x * 0.2, 0],
      position: [x * 0.05, -y * 0.05, 0]
    });
  };

  // Create a simple painting frame
  return (
    <group onPointerMove={handleMouseMove}>
      <animated.group
        ref={group}
        scale={spring.scale as any}
        position={spring.position as any}
        rotation={spring.rotation as any}
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
      </animated.group>
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
