<script>
import sizePizza from "../../json/size-list.json";
import { usePizzaSize } from "@/stores/counter";

export default {
  data() {
    return {
      optionSize: sizePizza.data,
      selectedSize:
        sizePizza.data.find(
          (size) => size.id === usePizzaSize().pizzaSize.id
        ) || null,
      pizzaSizeStore: usePizzaSize(),
    };
  },
  watch: {
    pizzaSize(newValue) {
      // Mengupdate selectedSize saat pizzaSize berubah
      this.selectedSize =
        this.optionSize.find((size) => size.id === newValue.id) || null;
    },
    selectedSize() {
      usePizzaSize().setSize(this.selectedSize);
    },
  },
  mounted() {
    usePizzaSize().setSize(this.selectedSize);
  },
  computed: {
    pizzaSize() {
      return this.pizzaSizeStore.pizzaSize;
    },
  },
};
</script>

<template>
  <div class="custom-content">
    <div class="costume-size">
      <h3 class="custom">Size</h3>
      <div class="custome-size__option">
        <label
          class="custom-radio-label"
          v-for="(item, index) in optionSize"
          :key="index"
          :for="item.id"
        >
          <input
            :id="item.id"
            class="custom-input__radio"
            type="radio"
            :value="item"
            v-model="selectedSize"
          />
          {{ item.name }}
          <span class="checkmark"></span>
          <span v-if="item.extra_price !== 0" class="custom-input__price">
            (${{ parseFloat(item.extra_price).toFixed(2) }})</span
          >
        </label>
      </div>
    </div>
  </div>
</template>

<style src="./CustomPizza.scss" scoped></style>
