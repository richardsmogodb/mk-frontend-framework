export const SET_TOKEN = 'set_token';

export const state = () => ({
  token: null,
});

export const getters = {
  token: state => state.token,
};

export const actions = {
  async getTokenByTicket({ commit }, ticket) {
    const { data } = await this.$axios._auth(ticket);
    const { code, result } = data;
    if (code === 0) {
      commit(SET_TOKEN, result);
    }
  },
};

export const mutations = {
  [SET_TOKEN](state, token) {
    state.token = token;
  },
};