<template>
  <div id="app" class="main-container">
      <HomePage />
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue'

export default {
  name: "App",
  components: {
    HomePage
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");

body {
  height: 100vh;
  width: 100%;
  margin: 0;
  font-family: "Raleway", sans-serif;
}

.main-container {
  height: 100vh;
  width: 100%;
}

.page-container {
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  text-align: center;
}

</style>
