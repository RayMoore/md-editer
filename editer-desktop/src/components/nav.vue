<template>
  <div class="nav-wrapper">
    <avatar src="" class="avatar hover-black" icon-color="gainsboro" />
    <div class="file hover-black" @click="set_route('md-board')">
      <icon class="file-icon" name="files" style="color: gainsboro" />
    </div>
    <div class="cog hover-black" @click="set_route('setting-board')">
      <icon class="cog-icon" name="cog" style="color: gainsboro" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import avatar from "@/components/avatar";
export default {
  components: {
    avatar
  },
  computed: {
    ...mapState("user", ["token", "username", "avatar", "gender", "id"])
  },
  methods: {
    ...mapMutations({
      set_route: "router/set_route"
    })
  }
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  width: 5%;
  min-width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.avatar {
  cursor: pointer;
  width: 100%;
  height: 5%;
  min-height: 60px;
  min-width: 60px;
}
.file {
  cursor: pointer;
  width: 100%;
  height: 5%;
  min-height: 60px;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .file-icon {
    width: 36px;
    height: 36px;
  }
}
.cog {
  cursor: pointer;
  width: 100%;
  height: 5%;
  min-height: 60px;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  .cog-icon {
    width: 40px;
    height: 40px;
  }
}
.hover-black:hover {
  background-color: #00000080 !important;
}
</style>
