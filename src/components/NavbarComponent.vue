<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">香香麵攤</span>
      <div class="float-end">
        <button type="button" class="btn btn-light">
          <span class="align-middle">購物車</span>
          <span class="badge rounded-pill bg-danger">{{cartList.carts.length}}</span>
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from "pinia";
import cartStore from "../stores/cartStore.js";

export default {
computed: {
  ...mapState(cartStore,['cartList'])
},
}

</script>