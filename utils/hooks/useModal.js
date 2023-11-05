import { create } from 'zustand';

const usePlayerModal = create((set) => ({
  isOpen: false,
  currentBeat: '',
  currentBeatName: '',
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  playSong: (productmp3, productTitle) =>
    set({
      isOpen: true,
      currentBeat: productmp3,
      currentBeatName: productTitle,
    }),
  setCurrentBeat: (productmp3) =>
    set({ currentBeat: productmp3, currentBeatName: '' }),
}));

export default usePlayerModal;
