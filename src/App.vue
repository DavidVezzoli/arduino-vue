<template>
  <div id="app" class="main-container">
      <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      socket: this.$store.state.socket,
    }
  },
  mounted() {
    this.socket.on("receive-go-to-game-room", url => {
      this.$router.push(url)
    })
  },
  methods: {
    colorPicked(url){
      this.$store.dispatch("updateUrl", url);
    }
  }
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

button {
  top: 0;
  left: 0;
  padding: 20px 20px;
  margin: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
