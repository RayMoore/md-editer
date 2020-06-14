<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";
const { ipcRenderer, remote } = window.require("electron");
export default {
  mounted() {
    ipcRenderer.on("update-not-available", this.updateNotAvailable);
    ipcRenderer.on("update-available", this.updateAvailable);
    ipcRenderer.on("update-error", this.updateError);
    ipcRenderer.on("update-downloaded", this.updateDownloaded);
    ipcRenderer.on("checking-for-update", this.checkingForUpdate);
  },
  beforeDestroy() {
    ipcRenderer.removeListener("update-not-available", this.updateNotAvailable);
    ipcRenderer.removeListener("update-available", this.updateAvailable);
    ipcRenderer.removeListener("update-error", this.updateError);
    ipcRenderer.removeListener("update-downloaded", this.updateDownloaded);
    ipcRenderer.removeListener("checking-for-update", this.checkingForUpdate);
  },
  computed: {
    ...mapState("file", ["unsavedFiles"]),
  },
  methods: {
    updateNotAvailable() {
      return this.$alert.show({
        type: "info",
        message: this.$t("UPDATE_NOT_AVAILABLE"),
        interval: 3000,
      });
    },
    updateError() {
      return this.alert.show({
        type: "danger",
        message: this.$t("UPDATE_ERROR"),
        interval: 3000,
      });
    },
    checkingForUpdate() {
      return this.$alert.show({
        type: "info",
        message: this.$t("UPDATE_CHECKING"),
        interval: 3000,
      });
    },
    updateAvailable() {
      return this.$confirm.show({
        title: this.$t("UPDATE_AVAILABLE_TITLE"),
        messsage: this.$t("UPDATE_AVAILABLE_MESSAGE"),
        btns: [
          {
            label: this.$t("DOWNLOAD"),
            style: "color: var(--main-color-blue)",
            click: () => {
              return ipcRenderer.send("download-update");
            },
          },
          {
            label: this.$t("CANCEL"),
            style: "color: var(--main-color-danger)",
            click: () => null,
          },
        ],
      });
    },
    updateDownloaded() {
      const { unsavedFiles } = this;
      let btns = [
        {
          label: this.$t("CANCEL"),
          style: "color: var(--main-color-danger)",
          click: () => null,
        },
      ];
      if (Object.keys(unsavedFiles).length > 0) {
        // has unsaved files
        // save files first
        // then exec update-now
        btns.unshift({
          label: this.$t("SAVE_AND_UPDATE"),
          style: "color: var(--main-color-blue)",
          click: () => {
            return remote
              .getCurrentWindow()
              .webContents.send("save-and-update");
          },
        });
      } else {
        btns.unshift({
          label: this.$t("UPDATE"),
          style: "color: var(--main-color-blue)",
          click: () => {
            return ipcRenderer.send("update-now");
          },
        });
      }
      return this.$confirm.show({
        title: this.$t("UPDATE_DOWNLOADED_TITLE"),
        message: this.$t("UPDATE_DOWNLOADED_MESSAGE"),
        btns,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
