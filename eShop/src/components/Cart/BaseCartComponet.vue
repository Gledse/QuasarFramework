<template>
<div class="text-left ">

  <div class="text-h5 q-my-md">
      Carrinha
  </div>

  <ProductInCartComponent/>

</div>
</template>

<script>
import ProductInCartComponent from "components/Cart/ProductInCartComponent";
export default {
name: "BaseCartComponet",
  components: {ProductInCartComponent}
}
</script>

<style scoped>

</style>
