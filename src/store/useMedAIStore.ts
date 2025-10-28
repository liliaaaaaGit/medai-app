"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MedAIState {
  mode: "acute" | "chronic";
  input: {
    age?: number;
    sex?: "female" | "male" | "diverse" | "unspecified";
    symptoms?: string;
  };
  result?: any;
  loading: boolean;
  error?: string | null;
}

interface MedAIActions {
  setMode: (mode: "acute" | "chronic") => void;
  setInput: (input: Partial<MedAIState["input"]>) => void;
  setResult: (result: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: MedAIState = {
  mode: "acute",
  input: {},
  result: undefined,
  loading: false,
  error: null,
};

export const useMedAIStore = create<MedAIState & MedAIActions>()(
  persist(
    (set) => ({
      ...initialState,
      setMode: (mode) => set({ mode }),
      setInput: (input) =>
        set((state) => ({ input: { ...state.input, ...input } })),
      setResult: (result) => set({ result }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      reset: () => set(initialState),
    }),
    {
      name: "medai-storage",
      partialize: (state) => ({
        mode: state.mode,
        input: state.input,
      }),
    }
  )
);
