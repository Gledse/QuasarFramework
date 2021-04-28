<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        v-if="isHomePage"
        @click="$emit('toggleDrawer')"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
      />
      <q-btn
        v-else
        to="/"
        flat
        round
        dense
        icon="arrow_back"
        class="q-mr-sm"
      />

      <q-toolbar-title>
          {{ appTitle }}
      </q-toolbar-title>

      <div class = "q-gutter-sm q-mr-md">
        <q-btn flat round dense icon="add" to="/products/add"/>
        <q-btn flat round dense icon="shopping_cart" to="/cart">

        <q-badge v-if="productInCart.length" color="red-5" floating>
          {{ productInCart.length }}
        </q-badge>
        </q-btn>
      </div>

      <q-btn round flat to="/profile">
        <q-avatar to="/auth">
          <img :src= "userAuthImage" >
        </q-avatar>
      </q-btn>

    </q-toolbar>
  </q-header>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: "HeaderComponent",
  computed: {
    ...mapState('app', [
      'appTitle'
    ]),
    ...mapState('product', [
      'productInCart'
    ]),
    ...mapState('auth', [
      'userAuthImage'
    ]),
    isHomePage () {
      let routPath = this.$route.fullPath
      return routPath === '/'
    }
  }
}
</script>

<style scoped>

</style>
