import Vue from 'vue'
import Vuex from 'vuex'

import login from './login/login'

Vue.use(Vuex)

let result: any = {}

function findStoreModule (tree: any) {
  Object.keys(tree).forEach(function (key) {
    if (tree[key].hasOwnProperty('state')) {
      result[key] = tree[key]
    } else {
      findStoreModule(tree[key])
    }
  })
}

findStoreModule({
  login
})

console.log(result)

export default new Vuex.Store({
  modules: result
})
