<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item is-tab" exact>HOME</router-link>
          <router-link to="/projects" class="nav-item is-tab">PROJECTS</router-link>
        </div>
      </div>

      <!-- social media -->
      <div class="nav-right nav-menu">
        <a class="nav-item" href="https://github.com/rehnen"><img src="./assets/github-mark-32px.png" alt=""></a>
      </div>

    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'I am a potato',
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
