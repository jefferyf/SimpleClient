import axios from "axios";

const login = (context, user) => {
  return new Promise((resolve, reject) => {
    context.commit("auth_request");
    axios({
      url: "https://localhost:5001/api/token",
      data: user,
      method: "POST"
    })
      .then(resp => {
        const token = resp.data.token;
        const user = resp.data.user;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        context.commit("auth_success", { token, user });
        resolve(resp);
      })
      .catch(err => {
        context.commit("auth_error", err.response);
        localStorage.removeItem("token");
        reject(err);
      });
  });
};

const logout = context => {
  return new Promise(resolve => {
    context.commit("logout");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    resolve();
  });
};

export default {
  login,
  logout
};
