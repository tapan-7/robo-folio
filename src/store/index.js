import { create } from 'zustand';

export const useStore = create((set) => ({
  // Loading State Sequence
  loadingPhase: 'initial', // 'initial', 'approaching', 'landing', 'arrived', 'complete'
  setLoadingPhase: (phase) => set({ loadingPhase: phase }),
  
  // App State
  isLoaded: false,
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),
  
  // Scroll Position
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
