<template>

  <q-card class="my-card q-mb-md">
    <q-img
      src="https://cdn.quasar.dev/img/parallax2.jpg"
      basic
    >
      <div class="absolute-bottom text-subtitle2 text-center">

        <div class="row">
          <div class="col-8 text-left">
            <div class="text-h6">
              teste do app
            </div>
            <div class="text-bold">
              600.00 MT
            </div>
          </div>
            <div class="col-4 flex flex-center">
              <div class="">
                <q-btn
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
export default {
name: "productComponent"
}
</script>

<style scoped>

</style>
