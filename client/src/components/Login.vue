<template>
  <div class="hello">
    <h2>Login Component</h2>
    <input type="email" v-model="email" name="email" placeholder="email" />
    <br />
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="password"
    />
    <br />
    <div v-html="error" class="error"></div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        console.log("res", response.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.error{
  font-size: 12px;
  color: red
}
</style>
