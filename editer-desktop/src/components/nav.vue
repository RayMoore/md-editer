<template>
  <div class="nav-wrapper">
    <avatar src="" class="avatar" icon-color="gainsboro" />
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
}
.avatar {
  width: 100%;
  height: 5%;
  min-height: 60px;
  min-width: 60px;
}
</style>
