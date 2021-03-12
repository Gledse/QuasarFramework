<template>
  <q-page class="q-pa-md">
<!--
    <pre>
      products: {{ products }}
    </pre>
-->
    <product-component
        v-for="product in products"
        :key="product.id"
        :product="product"
     />

   </q-page>
 </template>

 <script>
 import  {mapState, mapActions} from 'vuex'
 import ProductComponent from "components/products/ProductComponent";

 export default {
   name: 'IndexPage',
   components: {ProductComponent},
   computed: {
     ...mapState('app', [
       'appIcon'
     ]),
     ...mapState('product', [
       'products'
     ])
   },
   methods: {
     ...mapActions('product', [
       'getProducts'
     ]),
     initialize () {
       this.getProducts ()
     }
   },
   mounted (){
     this.initialize()
   }
 }
 </script>
