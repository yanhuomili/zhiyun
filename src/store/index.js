import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
// import tagsView from './modules/tagsView'
import user from './modules/user'
import pagination from './modules/pagination'
import dictionaries from './modules/dictionaries'
import headerLogisticsTrace from './modules/headerLogisticsTrace'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    dictionaries,
    // tagsView,
    user,
    headerLogisticsTrace,
    pagination
  },
  getters
})

export default store
