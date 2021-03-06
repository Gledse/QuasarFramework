
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


const stateA = {

  products: {},
  SERVER_URL: 'https://lives.explicador.co.mz/api/',
  AUTHORIZATION_KEY: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOGI0NGVhYzNjODY5ZGU3NDJjNWY3Zjc3NjBiMGZjNjBlZDdjZDQ0ZmY1YmQwODc5OTM0MWIxMTJiOWYxMTQwMDFiNTc2ZGRkNjg2NmJlYzQiLCJpYXQiOjE2MDAxOTYzNjQsIm5iZiI6MTYwMDE5NjM2NCwiZXhwIjoxNjMxNzMyMzY0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.mzHkN4R62VCxsI7nplh7_yD2UTVk7-LeI3ITRlw5xqrEwo3jtFxCh0i22izHyK6NXwJjSRZIH3L-nnBIrSc2Nkh3-eOK54eQKBIVvMH6dTLszxnRJSTqVPlCMu5Z76WnJQTrKH40QSsz6TLRVfveIA01_lNSnQJBAElOVG81CfywgvmlDZKEw6prg__Fy-3s4zX-Bh8qzKY5OPEUk1p37FyB087a5OiEGZ3HmFAg4hbIXN81zzybysPBu_J7OySQewaqRdsHUOpAn3o_RrUbKC9iSKaeUfzH85w-0SY9lFjK5HhWyhqYkB_FtIWUQkQvAdzkQv01lD4OG5QUhotAg_JWT6QW7LDviH3alhDK43lkW3CSpMjsK9edwjcEqDMmyR5whdwJXk7jQP2tVVcEBKpbsZjSmPD-O2HjENutsp-xkVAVu8DRY4r5jRUeJZ49TgHEYTHEkOI_kugE4nYEsquj-2O5PXHjxqvi0DY6Rjx207KuUPbCZGd_1Wcn7e-AEbDJd6Bui4YiJ0NBOWDzOLUOWyxQsuIYip9fTomQvf436n74Xm5UNNe5Epl3zvpkJdWwux8R0Kz2PgQts5ISpJIdozLkCJUyqXI_0YmnMgrm3tc_lJkd9PnES39_AhQuNh2cVFLhpRUzyL5VT3v4O7yi_0cDJ7rygQHbTxYM80Q',
  loading: false

}
const mutations = {

}
const getters = {

}
const actions = {
      getProducts ({ stateA, commit, dispatch }) {
        axios.get(stateA.SERVER_URL + 'products').then(response => {
          console.log('Server response: ', response)
        })
      }
}
export default {
  namespaced: true,
  state : stateA,
  mutations,
  getters,
  actions,
}
