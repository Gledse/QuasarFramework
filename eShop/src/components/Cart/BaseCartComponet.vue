<template>
<div class="text-left ">

  <div class="text-h5 q-my-md">
      Carrinha
  </div>

  <template v-for="i in 10">

  <ProductInCartComponent/>
    <q-separator class="q-my-md"/>

  </template>

  <q-footer class="bg-grey-2">
    <div class="q-pa-md">

      <div class="q-pa-md text-grey-8">
        <div class="text-bold text-primary">Resumo da compra</div>

        <div class="row q-pt-md">
          <div class="col-6 text-bold">
            Quantidade:
          </div>
          <div class="col-6  text-h6 text-right">
            10 Produtos
          </div>
        </div>
        <div class="row q-pb-md">
          <div class="col-6 text-bold">
            Valor Total:
          </div>
          <div class="col-6  text-h6 text-right">
            89,00 MT
          </div>
        </div>

      </div>
      <div>
        <q-btn
          label="Pagar (MPesa)"
          dense
          color="primary"
          class="full-width"
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
