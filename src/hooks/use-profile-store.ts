"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CompetitorProfile } from '@/types/competitor';
import { competitorProfiles as seedData } from '@/data/competitor-matrix';

interface ProfileState {
  profiles: CompetitorProfile[];
  comparisonList: string[];
  addProfile: (profile: CompetitorProfile) => void;
  updateProfile: (id: string, profile: CompetitorProfile) => void;
  deleteProfile: (id: string) => void;
  importProfiles: (profiles: CompetitorProfile[]) => void;
  toggleComparison: (id: string) => void;
  clearComparison: () => void;
  resetToSeed: () => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profiles: seedData,
      comparisonList: [],
      addProfile: (profile) => set((state) => ({
        profiles: [...state.profiles, profile]
      })),
      importProfiles: (profiles) => set({ profiles, comparisonList: [] }),
      toggleComparison: (id) => set((state) => ({
        comparisonList: state.comparisonList.includes(id)
          ? state.comparisonList.filter((profileId) => profileId !== id)
          : state.comparisonList.length < 3
            ? [...state.comparisonList, id]
            : state.comparisonList,
      })),
      clearComparison: () => set({ comparisonList: [] }),
      updateProfile: (id, profile) => set((state) => ({
        profiles: state.profiles.map((p) => (p.id === id ? profile : p)),
      })),
      deleteProfile: (id) => set((state) => ({
        profiles: state.profiles.filter((p) => p.id !== id),
      })),
      resetToSeed: () => set({ profiles: seedData }),
    }),
    {
      name: 'gateway-matrix-storage',
      skipHydration: true,
    }
  )
);
