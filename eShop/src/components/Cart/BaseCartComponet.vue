<template>
<div class="text-left ">

  <div class="text-h5 q-my-md">
      Carrinha
  </div>

  <template v-for="productCarted in productInCart">

  <ProductInCartComponent
    :productCarted="productCarted"
   />
    <q-separator class="q-my-md"/>

  </template>

  <q-footer class="row" style="background: transparent">
    <div class="q-pa-md bg-grey-2 col-12 col-md-7">

      <div class="q-pa-md text-grey-8 ">
        <div class="text-bold text-primary">Resumo da compra</div>

        <div class="row q-pt-md">
          <div class="col-6 text-bold">
            Quantidade:
          </div>
          <div class="col-6  text-h6 text-right">
            {{ totalProduct }} Produtos
          </div>
        </div>
        <div class="row q-pb-md">
          <div class="col-6 text-bold">
            Valor Total:
          </div>
          <div class="col-6  text-h6 text-right">
            {{ totalSumProduct }} MT
          </div>
        </div>

      </div>
      <div>
        <q-btn
          label="Pagar (MPesa)"
          dense
          color="primary"
          class="full-width"
        />
      </div>

    </div>
  </q-footer>

</div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import ProductInCartComponent from "components/Cart/ProductInCartComponent";
export default {
name: "BaseCartComponet",
  components: {ProductInCartComponent},
  computed: {
  ...mapState('product' , [
    'productInCart', 'products'
  ]),
    ...mapGetters('product' , [
      'getProductById'
    ]),
    totalProduct () {
    let total = 0
      this.productInCart.forEach(p => {
        total += p.qtd
      })
      return total
    },
    totalSumProduct () {
      let total = 0
      this.productInCart.forEach(p => {

        let prod = this.getProductById(p.id)

        if (!prod) return;
        total += (p.qtd * prod.price)
      })
      return total
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
