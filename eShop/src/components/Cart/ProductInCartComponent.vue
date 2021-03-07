<template>
<div class="q-my-md">

  <q-list>
  <q-item>
    <q-item-section top thumbnail class="q-ml-none">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-btn
        label="Remover"
        text-color="red"
        size="sm"
        flat
        class="q-mt-md"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label caption>Prod Category</q-item-label>
      <q-item-label>Meus sapatos Velhos</q-item-label>
      <q-item-label caption>200 MT</q-item-label>
      <q-item-label>

        <div class="col-6" style="width: 130px">

          <q-input class="full-width" input-class="text-center" outlined v-model="qtd" :dense="true">
            <template v-slot:prepend>
              <q-btn @click="qtd--" icon="remove" color="grey" text-color="red" flat dense/>
            </template>
            <template v-slot:append>
              <q-btn @click="qtd++" icon="add" color="grey" text-color="primary" flat dense/>
            </template>
          </q-input>

        </div>

      </q-item-label>
    </q-item-section>

  </q-item>
  </q-list>

</div>
</template>

<script>
export default {
name: "ProductInCartComponent",
  data () {
  return{
    qtd: 0
  }
}
}
</script>

<style scoped>

</style>
