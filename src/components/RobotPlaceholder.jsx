import React, { useRef, useEffect } from 'react';
import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useStore } from '../store';
import gsap from 'gsap';

export const RobotPlaceholder = ({ position, color, name, delay = 0 }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const { loadingPhase } = useStore();

  useEffect(() => {
    if (!groupRef.current) return;

    if (loadingPhase === 'initial') {
      // Start high up and invisible inside the spacecraft
      gsap.set(groupRef.current.position, { y: position[1] + 10 });
      gsap.set(groupRef.current.scale, { x: 0, y: 0, z: 0 });
    }

    if (loadingPhase === 'arrived') {
      // Descend to the platform
      gsap.to(groupRef.current.position, {
        y: position[1],
        duration: 1.5,
        delay: delay,
        ease: "bounce.out"
      });
      
      gsap.to(groupRef.current.scale, {
        x: 1, y: 1, z: 1,
        duration: 0.5,
        delay: delay,
        ease: "back.out(1.7)"
      });
    }
  }, [loadingPhase, position, delay]);
  
  // Basic cursor following for Curio
  useFrame((state) => {
    if (name === 'Curio' && groupRef.current && loadingPhase === 'complete') {
      // Make Curio look at the mouse (simplified)
      const mouseX = (state.pointer.x * state.viewport.width) / 2;
      const mouseY = (state.pointer.y * state.viewport.height) / 2;
      
      // Target position
      const targetX = mouseX;
      
      // Smooth interpolation
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      
      // Rotate towards movement
      groupRef.current.rotation.y = (targetX - groupRef.current.position.x) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={[position[0], position[1] + 10, position[2]]}>
        <mesh ref={meshRef} castShadow>
          <capsuleGeometry args={[0.5, 1, 4, 16]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Eye/Accent Light */}
        <mesh position={[0, 0.5, 0.45]}>
          <boxGeometry args={[0.6, 0.2, 0.2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
};
