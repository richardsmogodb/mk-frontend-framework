export const SET_TOKEN = 'set_token';

export const state = () => ({
  token: null,
});

export const getters = {
  token: state => state.token,
};

export const actions = {
  async getTokenByTicket({ commit }, ticket) {
    try {
      const { data } = await this.$api._getToken({ ticket });
      const { code, result } = data;
      if (code === 0) {
        commit(SET_TOKEN, result);
        return result;
      }
    } catch (err) {
      console.log(err);
    }
  },
};

export const mutations = {
  [SET_TOKEN](state, token) {
    state.token = token;
  },
};
