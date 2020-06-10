<template>
  <div class="content-wrapper">
    <div class="border-top"></div>
    <md-board v-show="isVisible('md-board')" />
    <setting-board v-show="isVisible('setting-board')" />
  </div>
</template>

<script>
import mdBoard from "@/components/md-board";
import settingBoard from "@/components/setting-board";
import { mapState } from "vuex";
export default {
  components: {
    mdBoard,
    settingBoard
  },
  computed: {
    ...mapState("router", ["route"]),
    isVisible() {
      return function(tag) {
        const { route } = this;
        return tag === route;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}
.border-top{
  position:absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 0.5px;
  background-color: #303030;
}
</style>
