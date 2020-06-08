const state = {
  path: "",
  locale: ""
};

const getters = {};
const actions = {
  init_setting_store({ commit }, payload) {
    const { path, locale } = payload;
    commit("set_locale", locale);
    commit("set_path", path);
  }
};
const mutations = {
  set_locale(state, payload) {
    state.locale = payload;
  },
  set_path(state, payload) {
    state.path = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
