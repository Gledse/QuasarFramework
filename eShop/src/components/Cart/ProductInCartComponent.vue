<template>
<div class="q-my-md">

  <q-list>
  <q-item v-if="product">
    <q-item-section top thumbnail class="q-ml-none">
      <img :src="productImage(product)">

      <q-btn
        @click="confirmremoveFromCart()"
        label="Remover"
        text-color="red"
        size="sm"
        flat
        class="q-mt-md"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label caption>Prod Category </q-item-label>

      <q-item-label>
        {{ product.name }}
      </q-item-label>
      <q-item-label>
        {{ product.price }}
      </q-item-label>

      <q-item-label>
        <div class="col-6" style="width: 130px">

          <q-input class="full-width" input-class="text-center" outlined v-model="qtd" :dense="true">
            <template v-slot:prepend>
              <q-btn @click="qtd--" icon="remove" color="grey" text-color="red" flat dense/>
            </template>
            <template v-slot:append>
              <q-btn @click="qtd++" icon="add" color="grey" text-color="primary" flat dense/>
            </template>
          </q-input>

        </div>
      </q-item-label>

    </q-item-section>

  </q-item>
  </q-list>

</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
name: "ProductInCartComponent",
  props: ['productCarted'],
  data () {
  return{
    qtd: 0
  }
},
  computed: {
  ...mapGetters('product',[
    'getProductById',
    'productImage',
  ]),
    product () {
    return this.getProductById(this.productCarted.id)
    }
  },
  methods: {
  ...mapActions('product', [
    'addToCart',
    'removeFromCart'
  ]),
  initialize() {
    this.qtd = this.productCarted.qtd
  },
    confirmremoveFromCart () {
      this.$q.dialog({
        title: 'Remover da carrinha',
        message: 'Deseja remover o produto \'' + this.product.name + '\', da carrinha?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.removeFromCart(this.product)
      })
    },
  },
  mounted() {
  this.initialize()
  },
  watch: {
  qtd (val) {
    this.addToCart({
      id: this.productCarted.id,
      qtd: val
    })
  }
  }
}
</script>

<style scoped>

</style>
