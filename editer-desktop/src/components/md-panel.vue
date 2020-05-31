<template>
  <div class="md-panel-wrapper">
    <tab-list />
    <mavon-editor
      class="editor"
      v-model="value"
      :box-shadow="false"
      style="font-family: NotoSans"
      :placeholder="$t('START_EDITING')"
    />
  </div>
</template>

<script>
import tabList from "./tab-list";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {
    tabList
  }
};
</script>

<style lang="scss" scoped>
.md-panel-wrapper {
  flex: 1;
  padding: 0px 5px 0px 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.editor {
  width: 100%;
  flex: 1;
  border: none;
}
</style>
