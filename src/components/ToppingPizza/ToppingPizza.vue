<script>
import { useTopping } from "@/stores/counter";
import { usePizza } from "@/stores/counter";
import toppingList from "../../json/topping-list.json";

export default {
  data() {
    return {
      toppingList: toppingList.data,
    };
  },

  methods: {
    isToppingActived(id) {
      return usePizza().pizza.toppings?.includes(id);
    },
    isToppingSelected(id) {
      return useTopping().topping.some((item) => item.id === id);
    },

    setTopping(item) {
      console.log(useTopping().topping.some((top) => top.id === item.id));
      if (usePizza().pizza.toppings?.includes(item.id)) {
        return useTopping().setTopping(item);
      }
    },
  },
};
</script>

<template>
  <div>
    <h3>Toppings</h3>
    <div class="toppings-wrapper">
      <div
        v-for="(item, index) in toppingList"
        @click="setTopping(item)"
        :class="{
          'topping-item__selected topping-item':
            isToppingActived(item.id) && isToppingSelected(item.id),
          'topping-item__active topping-item': isToppingActived(item.id),
          'topping-item__unactive topping-item': !isToppingActived(item.id),
        }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style src="./ToppingPizza.scss" scoped></style>
