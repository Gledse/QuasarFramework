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
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>

  </div>

</template>

<script>
export default {
name: "ProductDetailsOtherProducts",
  data () {
    return{
      slide: 1,
      autoplay: true
    }
  }
}
</script>

<style scoped>

</style>
