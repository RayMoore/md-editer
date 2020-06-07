<template>
  <transition name="fade">
    <div :class="computedAlertClass" v-if="visible">
      <span class="display-only" :style="computedFontStyle">{{ message }}</span>
      <a @click="resetTimer">
        <icon name="closebold" :style="computedIconStyle" class="icon" />
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      dismissTimer: null
    };
  },
  computed: {
    computedAlertClass() {
      const { type } = this;
      let alertBase = "alert shadow";
      let alertType = type;
      return `${alertBase} ${alertType}`;
    },
    computedFontStyle() {
      const { fontFamily, fontColor } = this;
      return `font-family: ${fontFamily}; color: ${fontColor}`;
    },
    computedIconStyle() {
      const { fontColor } = this;
      return `color: ${fontColor}`;
    }
  },
  props: {
    type: {
      type: String,
      default: "secondary"
    },
    fontFamily: {
      type: String,
      default: "NotoSans"
    },
    fontColor: {
      type: String,
      default: "black"
    },
    message: {
      type: String,
      default: "message"
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    show() {
      this.visible = true;
      this.dismissTimer = setTimeout(() => {
        // automatically close alert
        if (this) this.resetTimer();
      }, this.interval);
    },
    dismiss() {
      this.visible = false;
    },
    resetTimer() {
      if (this.visible) this.visible = false;
      if (this.dismissTimer) clearTimeout(this.dismissTimer);
      this.dismissTimer = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/style.scss";
.alert {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10050 !important;
  height: 5vh;
  min-height: 40px;
  max-height: #{"min(5vh, 50px)"};
  min-width: 200px;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  span {
    margin-left: 5%;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  a {
    cursor: pointer;
    width: 15%;
    min-width: 25px;
    max-width: 35px;
    height: 60%;
    min-height: 25px;
    max-height: 35px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.icon {
  width: 15px;
  height: 15px;
}

// before enter and after leave
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// after enter and before leave
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s;
}
</style>
