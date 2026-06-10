import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, ContactShadows } from '@react-three/drei';
import { RobotPlaceholder } from './components/RobotPlaceholder';
import { Spacecraft } from './components/Spacecraft';
import { LoadingScreen } from './components/LoadingScreen';
import { useStore } from './store';

export default function App() {
  const { loadingPhase } = useStore();

  return (
    <>
      <LoadingScreen />

      {/* 3D Background & Characters */}
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }}>
          <color attach="background" args={['#090909']} />
          
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Slower stars during loading, faster when arrived? Keep it simple for now */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <Suspense fallback={null}>
            <Spacecraft />
            
            {/* The Crew */}
            <RobotPlaceholder name="Curio" position={[0, 0, 0]} color="#60A5FA" delay={0} />
            <RobotPlaceholder name="Bolt" position={[-2, 0, -2]} color="#FB923C" delay={0.2} />
            <RobotPlaceholder name="Pix" position={[2, 0, -2]} color="#FBBF24" delay={0.4} />
            <RobotPlaceholder name="Doc" position={[-4, 0, -4]} color="#34D399" delay={0.6} />
            <RobotPlaceholder name="Byte" position={[4, 0, -4]} color="#A78BFA" delay={0.8} />

            {/* Floor shadow receiver */}
            <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
          </Suspense>
        </Canvas>
      </div>

      {/* 2D UI Overlay - Only show when loading is complete */}
      <div className={`ui-layer ${loadingPhase === 'complete' ? 'visible' : 'hidden'}`} style={{ opacity: loadingPhase === 'complete' ? 1 : 0, transition: 'opacity 2s ease' }}>
        <section className="ui-content hero-section">
          <h1>Hi, I'm Tapan Kumar Swain</h1>
          <h2>Software Engineer</h2>
          <p>
            Building applications, digital experiences, and products that solve real-world problems.
          </p>
          <div className="button-group">
            <button className="btn">View Projects</button>
            <button className="btn">Resume</button>
            <button className="btn">Blogs</button>
            <button className="btn">Contact</button>
          </div>
        </section>

        <section className="ui-content about-section">
          <h2>About Me</h2>
          <p>A cinematic journey through my career.</p>
        </section>
        
        <section className="ui-content skills-section">
          <h2>Skills</h2>
          <p>Tools and technologies I use to build things.</p>
        </section>
      </div>
    </>
  );
}
