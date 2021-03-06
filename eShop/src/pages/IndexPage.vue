<template>
  <q-page class="q-pa-md">

    <product-component/>
    <product-component/>
    <product-component/>
    <product-component/>
    <product-component/>
    <product-component/>

  </q-page>
</template>

<script>
import  {mapState} from 'vuex'
import ProductComponent from "components/products/ProductComponent";

export default {
  name: 'IndexPage',
  components: {ProductComponent},
  computed: {
    ...mapState('app', [
      'appIcon'
    ]),
  }
}
</script>
