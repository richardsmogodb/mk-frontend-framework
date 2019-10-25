// import { SET_API } from '@/utils/mutations-type';
const SET_API = 'set_api';

export const state = () => ({
  api: {},
});

export const getters = {
  api: state => state.api,
};

export const actions = {
  initApi({ commit }, api) {
    commit(SET_API, api);
  },
};

export const mutations = {
  [SET_API](state, api) {
    state.api = api;
  },
};
