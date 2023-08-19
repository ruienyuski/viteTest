<template>
    <div class="row row-cols-3 my-4 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card">
        <img :src="product.imageUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="card-title">{{product.title}}
            <div class="float-end">$ {{product.price}}</div>
          </h6>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-outline-success" @click.prevent="addToCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
import { mapState, mapActions } from "pinia";
import productStore from "../stores/productStore.js";
import cartStore from "../stores/cartStore.js";

export default {

  computed:{
    ...mapState(productStore,['sortProducts'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>