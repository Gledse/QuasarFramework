<template>
<div>

   <div class="row">
     <div class="col-8">
       <q-select dense outlined v-model="model" :options="options" label="Quantidade"/>

     </div>
     <div class="col-4 q-pl-sm">
       <q-btn
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
export default {
  name: "ProductDetailsAddToCart",
  data () {
    return{
      model: '',
      options: [
        1, 2, 3, 4, 5, 6, 7, 8, 9
      ]
    }
  }
}
</script>

<style scoped>

</style>
