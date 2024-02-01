<script>
import CardForm from "./CardForm/CardForm.vue";
import Payment from "../PaymentSummary/PaymentSummary.vue";
import TopingPizza from "../ToppingPizza/ToppingPizza.vue";
import CheesePizza from "../../assets/img/pizza/Cheese Pizza.png";
import VeggiePizza from "../../assets/img/pizza/Veggie Pizza.png";
import ClassicalPizza from "../../assets/img/pizza/Classical Pizza.png";
import PizzaList from "../../json/pizza-list.json";
import pizzaSize from "../../json/size-list.json";
import CustomPizza from "../CustomPizza/CustomPizza.vue";
import { usePizza } from "@/stores/counter";
export default {
  components: {
    CardForm,
    Payment,
    CustomPizza,
    TopingPizza,
  },
  data() {
    return {
      cheesePizza: CheesePizza,
      classicalPizza: ClassicalPizza,
      pizzaList: PizzaList.data,
      optionSize: pizzaSize.data,
      isActive: true,

      img: [CheesePizza, VeggiePizza, ClassicalPizza],
    };
  },
  methods: {
    changeState(data) {
      this.isActive = true;
      this.orderPizza = data;
      usePizza().setPizza(data);
    },
  },
  watch: {},
  mounted() {
    usePizza().setPizza(this.orderPizza);
  },
  computed: {
    orderPizza() {
      return usePizza().pizza;
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="form-wrapper">
        <h1 class="form-title">Choose your pizza</h1>
        <div class="form-order-wrapper">
          <CardForm
            v-for="(item, index) in pizzaList"
            @click="
              changeState({
                id: item.id,
                name: item.name,
                price: item.discount.final_price,
                toppings: item.toppings,
              })
            "
            :isActive="isActive"
            :img="img[index]"
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :discount="item.discount"
            :order="orderPizza"
          />
        </div>
      </div>

      <div class="content-wrapper__custom-pizza">
        <h1>Custom Pizza</h1>
        <CustomPizza />
        <TopingPizza />
      </div>
    </div>
    <div class="payment-wrapper">
      <Payment :order="orderPizza" />
    </div>
  </div>
</template>
<style src="./OrderForm.scss" scoped></style>
