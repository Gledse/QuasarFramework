<template>
  <div>

    <q-card class="my-card" style="min-height: 210px">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
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
            <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" style="width: 100%;height: 100%">
          </div>
        </div>
      </q-scroll-area>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductDetailsImage"
}
</script>

<style scoped>

</style>
