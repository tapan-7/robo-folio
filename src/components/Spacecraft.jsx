import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useStore } from '../store';
import gsap from 'gsap';

export const Spacecraft = () => {
  const craftRef = useRef();
  const lightRef = useRef();
  const { loadingPhase, setLoadingPhase } = useStore();

  useEffect(() => {
    if (!craftRef.current) return;

    // The entire cinematic timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setLoadingPhase('complete');
      }
    });

    // Initial state: Far away and invisible
    gsap.set(craftRef.current.position, { z: -80, y: 10 });
    gsap.set(craftRef.current.scale, { x: 0, y: 0, z: 0 });

    // 1. Wait a moment in the blackness
    tl.to({}, { duration: 2, onComplete: () => setLoadingPhase('approaching') });

    // 2. Spacecraft slowly approaches
    tl.to(craftRef.current.position, {
      z: 0,
      y: 3,
      duration: 6,
      ease: "power2.inOut"
    }, "<");
    
    tl.to(craftRef.current.scale, {
      x: 1, y: 1, z: 1,
      duration: 4,
      ease: "power2.out"
    }, "-=5");

    // 3. Hovering / Landing phase
    tl.to({}, { duration: 1, onComplete: () => setLoadingPhase('landing') });
    
    tl.to(craftRef.current.position, {
      y: 2,
      duration: 2,
      ease: "power1.inOut"
    });

    // 4. Robots descend (handled in the Robot component based on 'arrived' state)
    tl.to({}, { duration: 0.5, onComplete: () => setLoadingPhase('arrived') });

    // 5. Wait for robots to settle
    tl.to({}, { duration: 3 });

    // 6. Spacecraft leaves
    tl.to(craftRef.current.position, {
      y: 15,
      z: 50,
      duration: 4,
      ease: "power2.in"
    });
    
    tl.to(craftRef.current.scale, {
      x: 0, y: 0, z: 0,
      duration: 3,
      ease: "power2.in"
    }, "-=3");

    return () => tl.kill();
  }, [setLoadingPhase]);

  // Subtle hover animation while active
  useFrame((state) => {
    if (craftRef.current && loadingPhase !== 'complete') {
      // Add a slight bobbing motion on top of GSAP animations
      const time = state.clock.getElapsedTime();
      craftRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      craftRef.current.rotation.z = Math.sin(time * 0.8) * 0.05;
      
      // Blink the engine light
      if (lightRef.current) {
        lightRef.current.intensity = 1 + Math.sin(time * 8) * 0.5;
      }
    }
  });

  if (loadingPhase === 'complete') return null;

  return (
    <group ref={craftRef}>
      {/* Spacecraft Body Placeholder */}
      <mesh castShadow>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Engine Glow */}
      <pointLight ref={lightRef} color="#00ffff" intensity={2} distance={10} position={[0, -1, 2]} />
      <mesh position={[0, -1.2, 1.2]}>
        <cylinderGeometry args={[0.5, 0.8, 0.5, 16]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};
