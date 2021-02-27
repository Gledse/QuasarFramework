<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        @click="$emit('toggleDrawer')"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm" />


      <q-toolbar-title>eShop</q-toolbar-title>

      <div class = "q-gutter-sm q-mr-md">
        <q-btn flat round dense icon="add" />
        <q-btn flat round dense icon="shopping_cart" />
      </div>

      <q-avatar>
        <img src="https://avatars.githubusercontent.com/u/53790917?s=460&u=1919af2ed2cab67674820a5f2e6c9713dd1f24c5&v=4">
      </q-avatar>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>

</style>
