<template>
<div class="text-left text-grey-7">

  <div class="text-h6">
    {{ product.name }}
  </div>
  <div class="text-bold text-grey-9">
    {{ product.price }} MT
  </div>
  <div style="min-height: 50px">
    {{ product.description }}
  </div>

</div>
</template>

<script>
export default {
name: "ProductDetailsPrices",
  props: ['product']
}
</script>

<style scoped>

</style>
