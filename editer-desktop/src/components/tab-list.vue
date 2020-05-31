<template>
  <div class="tab-list-wrapper">
    <a v-for="(file, index) in files" :key="index" class="tab-pill">
      <span class="file-title display-only">{{ file["title"] }}</span>
      <a class="file-close"><icon name="closefile" class="close-icon"/></a>
      <div v-show="computedIsUnsaved(file)" class="file-close">
        <div class="editing" />
      </div>
    </a>
    <a class="tab-pill" style="background-color: whitesmoke">
      <icon name="add" />
    </a>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("file", ["files"]),
    computedIsUnsaved() {
      return function(file) {
        return true;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-list-wrapper {
  width: 100%;
  height: 5%;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 1px gainsboro solid;
}
.tab-pill {
  flex: 1;
  cursor: pointer;
  max-width: 120px;
  min-width: 80px;
  height: 65%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top: 1px gainsboro solid;
  border-right: 1px gainsboro solid;
  border-left: 1px gainsboro solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}
// .tab-pill:active {
//   box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
// }
.file-title {
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}
.file-close {
  width: 15%;
  height: 50%;
  min-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  .close-icon {
    width: 8px;
    height: 8px;
  }
}
.editing {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: black;
}
.editing:hover {
  opacity: 0;
}
</style>
