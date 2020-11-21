<template>
  <div class="page-container">
    <button v-on:click="ledOnOff()">LED {{ onOff }}</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      socket: this.$store.state.socket,
      ledState: false,
      onOff: "OFF",
    };
  },
  mounted() {
    this.socket.on("join-room", (message) => {
      this.message = message;
    });
  },
  methods: {
    ledOnOff() {
      this.ledState = !this.ledState;
      this.ledState == false ? (this.onOff = "OFF") : (this.onOff = "ON");
      this.socket.emit("switch-led", this.ledState);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
