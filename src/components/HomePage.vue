<template>
  <div class="page-container">
    <div class="light-graphic" ref="lightGraphic"></div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "HomePage",
  data() {
    return {
      socket: io("http://192.168.1.159:4000"),
    };
  },
  mounted() {
    this.socket.on("light-on-off", (value) => {
      if (value === 1) {
        this.$refs.lightGraphic.classList.remove("light-on");
      } else {
        this.$refs.lightGraphic.classList.add("light-on");
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-graphic {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(83, 0, 0);
}

.light-on {
  background-color: red;
}
</style>
