<template>
  <div>

    <ProductDetailsImage/>
    <product-details-prices/>

  </div>
</template>

<script>
import ProductDetailsImage from "components/products/ProductDetailsImage";
import ProductDetailsPrices from "components/products/ProductDetailsPrices";
export default {
name: "ProductDetailsComponent",
  components: {ProductDetailsPrices, ProductDetailsImage}
}
</script>

<style scoped>

</style>
