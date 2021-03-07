<template>
<div class="text-left ">

  <div class="text-h5 q-my-md">
      Carrinha
  </div>

  <templete v-for="i in 10">

  <ProductInCartComponent/>
    <q-separator class="q-my-md"/>

  </templete>

  <q-footer>
    <div>

      <div>

      </div>
      <div>
        <q-btn
          label="Pagar (MPesa)"
          class="full-width"
          color="primary"
        />
      </div>

    </div>
  </q-footer>

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
