import Vue from "vue";
import Vuex from "vuex";
import loginModule from "./modules/login";
import booksModule from "./modules/books";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: loginModule,
    books: booksModule
  }
});
