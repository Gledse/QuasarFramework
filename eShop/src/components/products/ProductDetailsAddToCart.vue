<template>
<div>

   <div class="row">
     <div class="col-8">
       <q-select @input="$emit('newQtd', model)" dense outlined v-model="model" :options="options" label="Quantidade"/>

     </div>
     <div class="col-4 q-pl-sm">
       <q-btn
         @click="addToCart({
          id: product.id,
          qtd: parseInt(model)
         })"
         label="Adicionar"
         dense
         color="grey"
         class="full-width full-height"
         unelevated
      />
     </div>

   </div>

</div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  name: "ProductDetailsAddToCart",
  props:['product'],
  data () {
    return{
      model: '',
      options: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ]
    }
  },
  methods: {
    ...mapActions('product', [
      'addToCart'
    ])
  }
}
</script>

<style scoped>

</style>
