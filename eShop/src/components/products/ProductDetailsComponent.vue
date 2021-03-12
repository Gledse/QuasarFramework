<template>
  <div>

    <ProductDetailsImage :product="product" />

    <product-details-prices :product="product" />

    <q-separator class="q-my-md"/>
    <Product-details-add-to-cart :product="product" />
    <q-separator class="q-my-md"/>

    <Product-details-other-products :product="product" />


  </div>
</template>

<script>
import ProductDetailsImage from "components/products/ProductDetailsImage";
import ProductDetailsPrices from "components/products/ProductDetailsPrices";
import ProductDetailsAddToCart from "components/products/ProductDetailsAddToCart";
import ProductDetailsOtherProducts from "components/products/ProductDetailsOtherProducts";

import { mapGetters } from 'vuex'

export default {
name: "ProductDetailsComponent",
  components: {ProductDetailsOtherProducts, ProductDetailsAddToCart, ProductDetailsPrices, ProductDetailsImage},

  ...mapGetters('product',[
    'getProductById'
  ]),
  product () {
    return this.getProductById(this.productId)
  },
  productId () {
    return this.$route.params.productId
  }
}
</script>


<style scoped>

</style>
