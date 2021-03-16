<template>
  <div class="hello">
    <h2>Register Component</h2>
    <input type="email" v-model="email" name="email" placeholder="email" />
    <br />
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="password"
    />
    <br />
    <div v-html="error"></div>
    <button @click="register">Register</button>
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
    async register() {
      try {
        const response = await AuthenticationService.register({
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
</style>
