<template>
  <div>

    <q-card class="my-card" style="min-height: 210px">
      <q-img
        :src="productImage(product)"
        basic
      >
      </q-img>
    </q-card>

    <div class="row">
      <q-scroll-area
        horizontal
        :style="`height: 60px; width: ${ $q.screen.width - 30.5 }px;`"
        class="bg-grey-1 q-mt-sm rounded-borders"
      >
        <div class=" row no-wrap ">
          <div v-for="n in 10" :key="n" style="width: 80px" class="q-pa-sm">
            <img :src="productImage(product)" alt="" style="width: 100%;height: 100%">
          </div>
        </div>
      </q-scroll-area>
    </div>

  </div>
</template>


<script>

import {mapGetters} from 'vuex'

export default {
  name: "ProductDetailsImage",
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
