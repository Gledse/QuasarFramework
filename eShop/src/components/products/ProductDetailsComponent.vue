<template>
  <div v-if="product">

    <ProductDetailsImage :product="product" />

    <product-details-prices :product="product" />

    <q-separator class="q-my-md"/>
<!--
    <pre>
      productInCart: {{ productInCart }}
    </pre>
-->
    <div v-if="totalValue" class="q-mt-md q-pt-md text-left">

      {{ product.price }} x {{ qtd }} = <span style="font-size: 25pt; font-weight: bold">{{ totalValue }}</span> <span class="text-bold">Valor Total</span>

    </div>

    <Product-details-add-to-cart @newQtd="qtd = parseInt($event)" :product="product" />
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
  data () {
  return {
    qtd: 0,
  }
  },
  computed: {

    ...mapState('product',[
      'products', /*'productInCart'*/
    ]),

  ...mapGetters('product',[
    'getProductById'
  ]),
    totalValue (){
      return this.product.price * this.qtd
    },
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
