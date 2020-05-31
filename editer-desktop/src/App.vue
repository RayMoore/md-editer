<template>
  <div id="app" v-title="computedTitle">
    <index />
  </div>
</template>

<script>
import index from "@/pages/index";
export default {
  name: "App",
  components: { index },
  computed: {
    computedTitle() {
      return this.$t("APP");
    }
  }
};
</script>

<style>
@import "./assets/font/font.css";
@import "../static/style.scss";
html,
body {
  margin: 0;
}
#app {
  font-family: "NotoSans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
