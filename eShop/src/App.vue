<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

import { mapActions } from 'vuex'
<script>
import {mapActions} from "vuex";

export default {
  name: 'App',
  methods: {
    ...mapActions('product', [
      'getCartSelection'
    ])
  },
  created() {
    this.getCartSelection ()
  }
}
</script>
