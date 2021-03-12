<template>

  <q-card class="my-card q-mb-md" style="min-height: 210px">
    <q-img
      :src="productImage(product)"
      basic
    >
      <div class="absolute-bottom text-subtitle2 text-center">

        <div class="row">
          <div class="col-8 text-left">
            <div class="text-h6">
              {{ product.name }}
            </div>
            <div class="text-bold">
              {{ product.price }} MT
            </div>
          </div>
          <div class="col-4 flex flex-center">
            <div class="">
              <q-btn
                :to="`/products/${ product.id }`"
                label = "Detalhes"
                color="primary"
                rounded
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </q-img>
  </q-card>

</template>

<script>

import  { mapGetters } from 'vuex'
export default {
  name: "productComponent",
  props: ['product'],
  computed: {
    ...mapGetters('product', [
      'productImage'
    ])
  }
}
</script>

<style scoped>
</style>
