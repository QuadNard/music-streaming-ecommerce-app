import { create } from 'zustand';

const usePlayer = create((set) => ({
  mp3Url: [],
  activeId: undefined,
  setmp3: (mp3) => set({ activeId: mp3 }),
  setmp3Url: (mp3Url) => set({ mp3Url }),
  reset: () => set({ mp3Url: [], activeId: undefined }),
}));

export default usePlayer;
