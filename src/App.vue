<script>
  import NavbarComponent from './components/NavbarComponent.vue';
  import CardComponent from './components/CardComponent.vue';
  import ProductsComponent from './components/ProductsComponent.vue';

  export default {
    components: {
      NavbarComponent,
      CardComponent,
      ProductsComponent
    }
  }
</script>

<template>
  <div class="container">
    <NavbarComponent />
    <CardComponent />
    <ProductsComponent />
  </div>
</template>

<style lang="scss">
  @import "./assets/all.scss";
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
  .table-image {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
</style>
