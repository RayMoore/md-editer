<template>
  <div class="doc-item-wrapper" :style="computedWrapperStyle">
    <icon name="file" />
    <span class="display-only">{{ title }}</span>
    <a class="file-delete active-btn"
      ><icon name="deletefile" class="delete-icon"
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    id: {
      type: String
    },
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    computedWrapperStyle() {
      const { showBorder } = this;
      if (showBorder) return "border-bottom: 1px gainsboro solid";
      return "";
    }
  }
};
</script>

<style lang="scss" scoped>
.doc-item-wrapper {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  span {
    font-size: 14px;
    width: 70%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.file-delete {
  height: 18px;
  width: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  position: absolute;
  right: 0;
  .delete-icon {
    color: var(--main-color-danger);
    width: 15px;
    height: 15px;
  }
}
</style>
