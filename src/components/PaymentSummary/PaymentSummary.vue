<script>
import { usePizzaSize, useTopping, usePizza } from "@/stores/counter";
export default {
  props: {
    order: Object,
    size: Object,
  },
  data() {
    return {
      totalTopping: [],
      modal: false,
    };
  },
  methods: {
    setModal() {
      this.modal = !this.modal;
    },
    resetPayment() {
      usePizzaSize().resetSize();
      useTopping().resetTopping();
      usePizza().resetPizza();
    },
  },
  computed: {
    pizzaSize() {
      return usePizzaSize().pizzaSize;
    },
    topping() {
      return useTopping().topping;
    },
    totalPrice() {
      const total = [];
      useTopping().topping.map((item) => total.push(item.price));

      return total.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    },
  },
};
</script>
<template>
  <div class="payment-wrapper">
    <h3 class="payment-title">Payment Summary</h3>
    <div class="payment-item">
      <div class="payment-list-wrapper">
        <div class="payment-list">
          <div class="payment-list__name">{{ order.name }}</div>
          <div class="payment-list__price">
            {{ parseFloat(order.price).toFixed(2) }}$
          </div>
        </div>
        <div class="payment-list">
          <div class="payment-list__name">Size - {{ pizzaSize.name }}</div>
          <div class="payment-list__price">
            {{ parseFloat(pizzaSize.extra_price).toFixed(2) }}$
          </div>
        </div>
        <div v-for="(item, index) in topping" class="payment-list">
          <div class="payment-list__name">{{ item.name }}</div>
          <div class="payment-list__price">
            {{ parseFloat(item.price).toFixed(2) }}$
          </div>
        </div>
      </div>
      <div class="payment-total">
        <h3>Total Price</h3>
        <h3>{{ totalPrice + order.price + pizzaSize.extra_price }}$</h3>
      </div>
    </div>
    <button @click="setModal()" class="payment-order__button">Order Now</button>
  </div>
  <div :class="{ 'modal-payment': modal, 'modal-payment__deactived': !modal }">
    <div class="modal-content">
      <div class="modal-logo-wrapper">
        <img
          class="modal-logo"
          src="../../assets/img//icons/success.png"
          alt=""
        />
      </div>
      <h2 class="modal-title">Order Succes</h2>
      <p class="modal-desc">
        Thank you, we have received your order succesfully
      </p>
      <button @click="setModal(), resetPayment()" class="modal-button">
        Close
      </button>
    </div>
  </div>
</template>

<style src="./PaymentSummary.scss" scoped></style>
