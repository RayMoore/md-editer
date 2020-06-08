<template>
  <div
    id="app"
    v-title="computedTitle"
    @click.stop="resetComponent"
    :style="computedFontStyle"
  >
    <index />
  </div>
</template>

<script>
import index from "@/pages/index";
import {
  getFilesFromStore,
  getLocaleFromStore,
  getDefaultPathFromStore,
  getFontFromStore,
  saveDefaultPathToStore,
  saveLocaleToStore,
  saveFilesToStore,
  saveFontToStore
} from "@/common/store";
import { objToArr } from "@/common/flatten";
import { mapActions, mapState } from "vuex";
const { remote, ipcRenderer } = window.require("electron");
export default {
  name: "App",
  components: { index },
  computed: {
    ...mapState("setting", ["locale", "path", "font"]),
    ...mapState("file", ["files"]),
    computedTitle() {
      return this.$t("APP");
    },
    computedFontStyle() {
      const { font } = this;
      return `font-family: ${font}`;
    }
  },
  mounted() {
    const files = getFilesFromStore() || {};
    const locale = getLocaleFromStore() || remote.app.getLocale();
    const path = getDefaultPathFromStore() || remote.app.getPath("documents");
    const font = getFontFromStore() || "Ai-Deep";
    this.init_file_store({ files });
    this.init_setting_store({ path, locale, font });
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
      saveLocaleToStore(newVal);
    },
    path(newVal, oldVal) {
      saveDefaultPathToStore(newVal);
    },
    files(newVal, oldVal) {
      saveFilesToStore(objToArr(newVal));
    },
    font(newVal, oldVal) {
      saveFontToStore(newVal);
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
