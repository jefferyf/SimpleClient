<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign In</h1>
      <label>Username</label>
      <input required v-model="username" placeholder="User Name" />
      <label>Password</label>
      <input
        required
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/"))
        // eslint-disable-next-line
        .catch(err => console.log("error: ", err));
    }
  }
};
</script>
