import React from 'react';
import { useStore } from '../store';

export const LoadingScreen = () => {
  const { loadingPhase } = useStore();

  if (loadingPhase === 'complete') return null;

  return (
    <div className="loader-screen">
      <h2 className="loader-text">
        {loadingPhase === 'initial' ? 'Establishing Connection...' : 'Loading Crew...'}
      </h2>
    </div>
  );
};
