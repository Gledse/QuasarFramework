<template>
<div class="q-my-md text-center">

  <base-cart-componet v-if="productInCart.length"/>

  <div v-else class="flex flex-center" style="height: 500px">
    <div class="text-grey-7">
      Carrinha vazia.
    </div>
  </div>

</div>
</template>

<script>

import BaseCartComponet from "components/Cart/BaseCartComponet";
import {mapState} from "vuex";
export default {
name: "CartPage",
  components: {BaseCartComponet},
  computed: {
    ...mapState('product', [
      'productInCart',
    ]),
  }
}
</script>

<style scoped>

</style>
