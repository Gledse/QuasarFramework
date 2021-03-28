<template>
  <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="formData.title"
        label="Titulo do Produto"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio']"
      />

      <q-input
        filled
        type="number"
        v-model="formData.price"
        label="Preço"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Insira o preço',
          val => val > 0 && val < 1000000 || 'O preço deve ser valido'
        ]"
      />
      <q-input
        filled
        type="text"
        v-model="formData.image_url"
        label="Link da imagem:"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Insira a imagem do produto',
        ]"
      />

      <q-input
        v-model="formData.description"
        filled
        type="textarea"
      />

      <q-footer class="row q-pr-md q-py-md bg-white">
        <div class="col-12 col-md-7">
          <q-btn
            label="Adicionar"
            :loading="loading"
            type="submit"
            color="primary"
            class="full-width"/>
        </div>
      </q-footer>
    </q-form>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
name: "AddOrEditProductComponent",
  data () {
    return {
      formData: {
        title: '',
        description: '',
        image_url: '',
        price: 0

      }
    }
  },

  computed: {
  ...mapState('product', [
    'loading'
  ])
  },
  methods: {
  ...mapActions('product',[
    'addNewProduct'
  ]),
    onSubmit() {
      this.addNewProduct(this.formData).then (product => {
        if (product) {
          this.$router.push('/products/' + product.id)
        }
      })
    },

    onReset() {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
