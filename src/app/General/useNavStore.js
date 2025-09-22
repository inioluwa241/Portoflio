import { create } from "zustand";

const useNavStore = create((set) => ({
  isOpen: false,
  savedScroll: null,
  restoredScroll: null,
  targetId: null,
  openNav: () =>
    set(() => {
      const y = typeof window !== "undefined" ? window.scrollY : 0;
      return { isOpen: true, savedScroll: y };
    }),
  closeNav: () =>
    set((state) => {
      return { isOpen: false, restoredScroll: state.savedScroll };
    }),

  clickNavLink: (targetId = null) => set({ isOpen: false, targetId }),
  clearTarget: () => set({ targetId: null }),
}));

export default useNavStore;
