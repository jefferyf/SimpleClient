const isLoggedIn = state => !!state.token;
const authStatus = state => state.status;

export default {
  isLoggedIn,
  authStatus
};
