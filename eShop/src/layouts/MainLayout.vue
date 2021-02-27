<template>
  <q-layout view="lHh Lpr lFf">

    <header-component
      @toggleDrawer="leftDrawerOpen= !leftDrawerOpen"
    />

    <drawer-component
      :leftDrawerOpen = "leftDrawerOpen"
      @toggleDrawer="leftDrawerOpen= !leftDrawerOpen"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderComponent from "components/base/HeaderComponent";
import DrawerComponent from "components/base/DrawerComponent";

export default {
  name: 'MainLayout',
  components: {DrawerComponent, HeaderComponent},
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
