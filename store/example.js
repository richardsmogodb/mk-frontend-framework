export const state = () => ({
  counter: 0,
});

export const getters = {
  counter: state => state.counter,
};

export const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
};
