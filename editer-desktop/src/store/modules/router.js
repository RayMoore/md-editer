const state = {
  route: "setting-board"
};

const getters = {};
const actions = {};
const mutations = {
  set_route(state, payload) {
    state.route = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
