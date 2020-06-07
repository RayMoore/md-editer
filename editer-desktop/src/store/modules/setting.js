const state = {
  locale: ""
};

const getters = {};
const actions = {
  init_setting_store({ commit }, payload) {
    const { locale } = payload;
    commit("set_locale", locale);
  }
};
const mutations = {
  set_locale(state, payload) {
    state.locale = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
