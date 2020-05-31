<template>
  <div class="index-wrapper">
    <my-nav style="background-color: #303030" />
    <my-content />
  </div>
</template>

<script>
import myNav from "@/components/nav";
import myContent from "@/components/content";
import docPanel from "@/components/doc-panel";
import mdPanel from "@/components/md-panel";
export default {
  components: {
    myNav,
    myContent,
    docPanel,
    mdPanel
  }
};
</script>

<style lang="scss" scoped>
.index-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
