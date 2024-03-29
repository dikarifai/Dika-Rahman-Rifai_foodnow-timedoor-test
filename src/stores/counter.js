import { defineStore } from "pinia";

const initialState = {
  id: null,
  name: "",
  extra_price: "",
};

export const usePizzaSize = defineStore("size", {
  state: () => ({
    pizzaSize: { id: 1, name: "Small", extra_price: 0 },
  }),
  actions: {
    setSize(data) {
      this.pizzaSize = data;
    },
    resetSize() {
      console.log("Reset");
      this.pizzaSize = { id: 1, name: "Small", extra_price: 0 };
    },
  },
});

export const usePizza = defineStore("pizza", {
  state: () => ({
    pizza: {
      id: 1,
      name: "Cheese Pizza",
      price: 8,
      discount: {
        is_active: false,
        final_price: 8,
      },
      toppings: [1, 2, 3, 4, 8, 11],
    },
  }),
  actions: {
    setPizza(pizza) {
      this.pizza = pizza;
    },
    resetPizza() {
      this.pizza = {
        id: 1,
        name: "Cheese Pizza",
        price: 8,
        discount: {
          is_active: false,
          final_price: 8,
        },
        toppings: [1, 2, 3, 4, 8, 11],
      };
    },
  },
});
export const useTopping = defineStore("topping", {
  state: () => ({
    topping: [],
  }),
  actions: {
    setTopping(data) {
      const existingIndex = this.topping.findIndex(
        (item) => item.id === data.id
      );

      if (existingIndex === -1) {
        // Tambahkan topping jika belum ada dalam array
        this.topping.push(data);
      } else {
        // Hapus topping jika sudah ada dalam array
        this.topping.splice(existingIndex, 1);
      }
    },
    resetTopping() {
      this.topping.splice(0, this.topping.length);
    },
  },
});
