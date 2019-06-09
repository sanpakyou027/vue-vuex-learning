import Vuex from "vuex"
import Vue from "vue"
import todos from "./modules/todos/index"

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        todos
    }
})