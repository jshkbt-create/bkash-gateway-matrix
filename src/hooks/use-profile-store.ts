"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CompetitorProfile, Priority } from '@/types/competitor';
import { competitorProfiles as seedData } from '@/data/competitor-matrix';

interface ProfileState {
  profiles: CompetitorProfile[];
  addProfile: (profile: CompetitorProfile) => void;
  updateProfile: (id: string, profile: CompetitorProfile) => void;
  deleteProfile: (id: string) => void;
  resetToSeed: () => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profiles: seedData,
      addProfile: (profile) => set((state) => ({ 
        profiles: [...state.profiles, profile] 
      })),
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
    }
  )
);