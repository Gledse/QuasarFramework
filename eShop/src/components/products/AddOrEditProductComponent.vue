<template>
  <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
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
        v-model="formData.description"
        filled
        type="textarea"
      />

      <q-footer class="q-pr-md q-py-md bg-white">
        <q-btn label="Adicionar" type="submit" color="primary" class="full-width"/>
      </q-footer>
    </q-form>

  </div>
</template>

<script>
export default {
name: "AddOrEditProductComponent",
  data () {
    return {
      formData: {
        title: "",
        description: "",
        price: 0

      }
    }
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
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
