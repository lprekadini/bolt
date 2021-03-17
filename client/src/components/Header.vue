<template>
  <div class="d-flex" style="background: #ebebeb;padding: 0 1rem;">
    <div class="w-100">
      <h2>Bolt</h2>
    </div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="login">Login</router-link>
      </li>
      <li>
        <router-link to="register">Sign Up</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.d-flex {
  display: flex;
}
.w-100 {
  width: 100%;
}
</style>