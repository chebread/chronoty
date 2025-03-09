import { create } from 'zustand';

interface IsRunningStoreState {
  isRunning: boolean;
  setIsRunning: (newValue: boolean) => void;
}

export const useIsRunningStore = create<IsRunningStoreState>(set => ({
  // 작동중
  isRunning: false,
  setIsRunning: newState => set({ isRunning: newState }),
}));

interface IntervalTimeStoreState {
  intervalTime: number;
  setIntervalTime: (newValue: number) => void;
}

export const useIntervalTimeStore = create<IntervalTimeStoreState>(set => ({
  intervalTime: 30, // default interval time
  setIntervalTime: newTime => set({ intervalTime: newTime }),
}));

interface IntervalIdStoreState {
  intervalId: any;
  setIntervalId: (newValue: any) => void;
}

export const useIntervalIdStore = create<IntervalIdStoreState>(set => ({
  intervalId: null,
  setIntervalId: state => set({ intervalId: state }),
}));
