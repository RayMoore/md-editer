<template>
  <div class="doc-panel-wrapper">
    <div class="seperator" />
    <panel-header />
    <panel-content />
  </div>
</template>

<script>
import panelHeader from "./panel-header";
import panelContent from "./panel-content";

export default {
  components: {
    panelHeader,
    panelContent
  }
};
</script>

<style lang="scss" scoped>
.doc-panel-wrapper {
  width: 10%;
  min-width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 10px 0px 10px;
  position: relative;
}
.seperator {
  width: 1px;
  height: 98%;
  border-radius: 0.5px;
  background-color: gainsboro;
  position: absolute;
  top: 1%;
  right: 0;
}
</style>
