<script>
import { useTopping } from "@/stores/counter";
import OfferTag from "../../../assets/img/ribbon.svg";

export default {
  props: {
    img: String,
    id: Number,
    name: String,
    price: Number,
    discount: Object,
    isActive: Boolean,
    order: Object,
  },
  data() {
    return {
      offerTag: OfferTag,
      offer: true,
    };
  },
  methods: {
    resetTopping(orderId, id) {
      if (orderId !== id) {
        return useTopping().resetTopping();
      }
      return;
    },
  },
};
</script>

<template>
  <div
    @click="resetTopping(order.id, id)"
    :class="[
      {
        'card-wrapper__active': isActive && order.id === id,
        'card-wrapper': order.id !== id,
      },
    ]"
  >
    <div class="offer-tag" v-if="discount.is_active">
      <img :src="offerTag" />
    </div>
    <div class="card-img-wrapper">
      <img class="card-img" :src="img" :alt="img" />
    </div>
    <div class="card-description">
      <div class="card-name">{{ name }}</div>
      <div class="card-price-wrapper">
        <div v-if="discount.is_active" class="card-discount">
          ${{ parseFloat(discount.final_price).toFixed(2) }}
        </div>
        <div
          :class="[
            {
              'card-price__discount': discount.is_active,
              'card-price': !discount.is_active,
            },
          ]"
        >
          ${{ parseFloat(price).toFixed(2) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./CardForm.scss" scoped></style>
