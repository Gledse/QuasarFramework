
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


const stateA = {

  products: {},
  SERVER_URL: 'https://lives.explicador.co.mz/api/',
  AUTHORIZATION_KEY: '',
  loading: false

}
const mutations = {

}
const getters = {

}
const actions = {

}
export default {
  namespaced: true,
  state : stateA,
  mutations,
  getters,
  actions,
}
