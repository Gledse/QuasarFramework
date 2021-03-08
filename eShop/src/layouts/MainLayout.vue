<template>
  <q-layout view="lHh Lpr lFf">

    <header-component
      @toggleDrawer="leftDrawerOpen= !leftDrawerOpen"
    />

    <drawer-component
      :leftDrawerOpen = "leftDrawerOpen"
      @toggleDrawer="leftDrawerOpen= !leftDrawerOpen"
    />

    <div class="row">
      <q-page-container class="col-12 col-md-8">
        <router-view />
      </q-page-container>
    </div>
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
