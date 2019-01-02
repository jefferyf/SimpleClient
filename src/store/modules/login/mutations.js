const auth_request = state => {
  state.status = "loading";
  state.loggingIn = true;
};

const auth_success = (state, payload) => {
  state.status = "success";
  state.loginSuccessful = true;
  state.token = payload.token;
  state.user = payload.user;
};

const auth_error = (state, err) => {
  state.status = "error";
  state.loginError = err.data;
  state.loggingIn = false;
};

const logout = state => {
  state.status = "";
  state.token = "";
  state.loginSuccessful = false;
  state.loggingIn = false;
};

export default {
  auth_request,
  auth_success,
  auth_error,
  logout
};
