import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: {},
      addItemCart: (item) => {
        set((state) => {
          if (!state.items[item.id]) {
            return {
              items: {
                ...state.items,
                [item.id]: { quantity: 1, item },
              },
            };
          }
          state.items[item.id].quantity += 1;
          return { items: { ...state.items } };
        });
      },
      removeItemCart: (item) =>
        set((state) => {
          if (state.items[item.id].quantity === 1) {
            delete state.items[item.id];

            return { items: { ...state.items } };
          }

          state.items[item.id].quantity -= 1;
          return { items: { ...state.items } };
        }),
    }),
    { name: "cart-storage" }
  )
);
