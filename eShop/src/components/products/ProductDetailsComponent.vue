<template>
  <div v-if="product">
<!--
    <pre>
      product: {{ product }}
    </pre>
  -->
    <ProductDetailsImage :product="product" />

    <product-details-prices :product="product" />

    <q-separator class="q-my-md"/>
    <Product-details-add-to-cart :product="product" />
    <q-separator class="q-my-md"/>

    <Product-details-other-products :product="product" />
  </div>
  <div v-else class="flex flex-center text-grey-7" style="height: 500px">
    <!-- div.text.h6
    -->
    <div class="text-center">
      <div class="text h6">
        Carregando dados do produto...
      </div>
      <div>
        Aguarde
      </div>
    </div>
  </div>

</template>

<script>
import ProductDetailsImage from "components/products/ProductDetailsImage";
import ProductDetailsPrices from "components/products/ProductDetailsPrices";
import ProductDetailsAddToCart from "components/products/ProductDetailsAddToCart";
import ProductDetailsOtherProducts from "components/products/ProductDetailsOtherProducts";

import {mapActions, mapGetters, mapState} from 'vuex'

export default {
name: "ProductDetailsComponent",
  components: {ProductDetailsOtherProducts, ProductDetailsAddToCart, ProductDetailsPrices, ProductDetailsImage},

  computed: {

    ...mapState('product',[
      'products'
    ]),

  ...mapGetters('product',[
    'getProductById'
  ]),
  product () {
    return this.getProductById(this.productId)
  },
  productId () {
    return this.$route.params.productId
  }

  },
  methods: {
    ...mapActions('product', [
      'getProducts'
    ]),
    initialize () {
      if (Object.keys(this.products).length === 0) {
      this.getProducts ()
      }
    }
  },
  mounted (){
    this.initialize()
  }
}
</script>


<style scoped>

</style>
