<template>
  <div>

    <ProductDetailsImage/>

    <product-details-prices/>

    <q-separator class="q-my-md"/>
    <Product-details-add-to-cart/>
    <q-separator class="q-my-md"/>


  </div>
</template>

<script>
import ProductDetailsImage from "components/products/ProductDetailsImage";
import ProductDetailsPrices from "components/products/ProductDetailsPrices";
import ProductDetailsAddToCart from "components/products/ProductDetailsAddToCart";
export default {
name: "ProductDetailsComponent",
  components: {ProductDetailsAddToCart, ProductDetailsPrices, ProductDetailsImage}
}
</script>

<style scoped>

</style>
