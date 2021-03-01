<template>
  <q-drawer
    v-model="toggleOpenDrawer"
    show-if-above
    bordered
    content-class="bg-grey-1"
  >
    <!--
     <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">

    </q-scroll-area>
    -->
      <q-list style="margin-top: 150px">
        <q-item-label
          header
          class="text-grey-8"
        >
          Opções
        </q-item-label>

        <template v-for="link in essentialLinks">
          <essential-link
            v-bind="link"
          />
          <q-separator v-if="link.canIncludeSeparator" class="q-my-md"/>
        </template>

      </q-list>

    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img :src="userAuthImage">
        </q-avatar>
        <div class="text-weight-bold">eShop</div>
        <div>@gledse_Jamisse</div>
      </div>
    </q-img>
  </q-drawer>
</template>

<script>

import HeaderComponent from "components/base/HeaderComponent";
import EssentialLink from "components/EssentialLink";
import {mapState} from "vuex";

const linksData = [
  {
    title: 'Inicio',
    caption: 'Pagina inicial',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Carrinha',
    caption: 'Produtos selecionados',
    icon: 'shopping_cart',
    link: '/cart'
  },
  {
    title: 'Adicionar',
    caption: 'Novos produtos',
    icon: 'add',
    link: '/products/add',
    canIncludeSeparator: true,
  },
  {
    title: 'Entrar',
    caption: 'Crie ou entre na sua conta',
    icon: 'person',
    link: '/auth'
  },

];

export default {
  name: "DrawerComponent",
  props: ['leftDrawerOpen'],
  components: {EssentialLink},
  data () {
    return {
      essentialLinks: linksData
    }
  },
  computed: {
    ...mapState('auth', [
      'userAuthImage'
    ]),
   toggleOpenDrawer: {
    get() {
    return this.leftDrawerOpen
    },
     set() {
      this.$emit('toggleDrawer')
     }
   }
  }
}
</script>

<style scoped>

</style>
