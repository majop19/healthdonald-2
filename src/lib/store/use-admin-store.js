"use client";

import { create } from "zustand";

export const useAdminStore = create((set) => ({
  adminMode: false,
  handleAdminMode: () => set((state) => ({ adminMode: !state.adminMode })),
}));
