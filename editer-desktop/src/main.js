// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

// icon
import "@/assets/icon";
import "@/assets/editor";

import store from "@/store";
import router from "@/router";
import i18n from "@/i18n";

Vue.config.productionTip = false;
Vue.directive("title", function(el, binding) {
  document.title = binding.value;
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  i18n,
  store,
  router,
  components: { App },
  template: "<App/>"
});
