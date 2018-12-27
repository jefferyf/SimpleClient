import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    loggingIn: false,
    loginError: null,
    loginSuccessful: false
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
      state.loggingIn = true;
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.loginSuccessful = true;
      state.token = token;
      state.user = user;
    },
    auth_error(state, err) {
      state.status = "error";
      state.loginError = err.data;
      state.loggingIn = false;
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.loginSuccessful = false;
      state.loggingIn = false;
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:5000/api/token",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err.response);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  }
});
