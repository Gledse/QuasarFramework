<template>
  <div class="q-my-md" style="height: 200px">

    <div class="q-pa-md ">
      <!--q-pr-md q-py-md bg-white q-mt-sm-->
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          v-for="(image, index) in composeImage"
          :name="index"
          :img-src="image"
        />
      </q-carousel>
    </div>

  </div>

</template>

<script>

import {mapGetters, mapState} from "vuex"

export default {
name: "ProductDetailsOtherProducts",
  props: ['product'],
  data () {
    return{
      slide: 1,
      autoplay: true
    }
  },
  computed: {
  ...mapState('product', [
    'products'
  ]),
    ...mapGetters('product', [
      'productImage'
    ]),
    composeImage(){
    let images = []
      Object.keys(this.products).forEach(key => {
        let Object = this.products[key]
        images.push(this.productImage(Object))
      })
      return images
    }
  }
}
</script>

<style scoped>

</style>
