<template>
  <div id="app" v-title="computedTitle" @click.stop="resetComponent">
    <index />
  </div>
</template>

<script>
import index from "@/pages/index";
import {
  getFilesFromStore,
  getLocaleFromStore,
  getDefaultPathFromStore
} from "@/common/store";
import { mapActions, mapState } from "vuex";
const { remote, ipcRenderer } = window.require("electron");
export default {
  name: "App",
  components: { index },
  computed: {
    ...mapState("setting", ["locale"]),
    computedTitle() {
      return this.$t("APP");
    }
  },
  mounted() {
    const files = getFilesFromStore() || [];
    const locale = getLocaleFromStore() || remote.app.getLocale();
    const path = getDefaultPathFromStore() || remote.app.getPath("documents");
    this.init_file_store({ path, files });
    this.init_setting_store({ locale });
    this.$i18n.locale = locale;
  },
  methods: {
    ...mapActions({
      init_file_store: "file/init_file_store",
      init_setting_store: "setting/init_setting_store"
    }),
    resetComponent() {
      this.$eventbus.$emit("reset-component");
    }
  },
  watch: {
    locale(newVal, oldVal) {
      this.$i18n.locale = newVal;
      ipcRenderer.send("locale-changed", newVal);
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
