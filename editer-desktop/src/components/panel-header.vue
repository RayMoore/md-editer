<template>
  <div class="panel-header-wrapper">
    <transition name="title-fade">
      <div v-show="!showInput" @click="showSearchInput" class="title">
        {{ $t("MY_DOCUMENTS") }}
      </div>
    </transition>
    <transition name="input-fade">
      <div v-show="showInput" class="search-input">
        <input />
      </div>
    </transition>
    <icon name="search" class="icon" :style="computedSearchIconStyle" />
    <transition name="input-fade">
      <icon
        v-show="showInput"
        name="close"
        class="icon"
        style="right: 5px; cursor: pointer"
        @click.native="hideSearchInput"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInput: false
    };
  },
  computed: {
    computedSearchIconStyle() {
      const { showInput } = this;
      if (showInput) return "right: calc(100% - 20px);transition: right 0.5s;";
      else return "right: 0;transition: right 0.5s;";
    }
  },
  methods: {
    showSearchInput() {
      this.showInput = true;
    },
    hideSearchInput() {
      this.showInput = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-header-wrapper {
  cursor: pointer;
  width: 100%;
  height: 5%;
  min-height: 50px;
  border-bottom: 1px gainsboro solid;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .title {
    width: 100%;
    height: 100%;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
.icon {
  position: absolute;
  width: 15px;
  height: 15px;
}
.search-input {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 1px lightgrey solid;
  input {
    cursor: pointer;
    border: none;
    width: calc(100% - 40px);
    margin-left: 20px;
  }
  input:focus {
    outline: none;
  }
}

// before enter and after leave
.title-fade-enter,
.title-fade-leave-to {
  opacity: 0;
}

// after enter and before leave
.title-fade-leave,
.title-fade-enter-to {
  opacity: 1;
}
.title-fade-enter-active {
  transition: all 0.35s;
  transition-delay: 0.25s;
}
.title-fade-leave-active {
  transition: all 0.35s;
}
// before enter and after leave
.input-fade-enter,
.input-fade-leave-to {
  opacity: 0;
}

// after enter and before leave
.input-fade-leave,
.input-fade-enter-to {
  opacity: 1;
}
.input-fade-enter-active {
  transition: all 0.35s;
  transition-delay: 0.5s;
}
.input-fade-leave-active {
  transition: all 0s;
}
</style>
