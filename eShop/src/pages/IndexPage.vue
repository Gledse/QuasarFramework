<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      :src="appIcon"
    >
  </q-page>
</template>

<script>
import  {mapState} from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapState('app', [
      'appIcon'
    ]),
  }
}
</script>
