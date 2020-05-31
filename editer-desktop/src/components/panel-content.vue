<template>
  <div class="panel-content-wrapper">
    <vue-scroll :ops="ops">
      <doc-item
        v-for="(file, index) in files"
        :key="index"
        :title="file['title']"
        :show-border="computedShowDocItemBorder(index)"
      />
    </vue-scroll>
  </div>
</template>

<script>
import vueScroll from "vuescroll";
import { mapState } from "vuex";
import { SCROLL_OPS } from "@/common/config";
import docItem from "./doc-item";
export default {
  components: {
    vueScroll,
    docItem
  },
  data() {
    return {
      ops: SCROLL_OPS
    };
  },
  computed: {
    ...mapState("file", ["files"]),
    computedShowDocItemBorder() {
      return function(index) {
        const { files } = this;
        return index !== files.length - 1;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
</style>
