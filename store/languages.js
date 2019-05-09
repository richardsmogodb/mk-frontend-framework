import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import enGB from 'ant-design-vue/lib/locale-provider/en_GB';
import jaJP from 'ant-design-vue/lib/locale-provider/ja_JP';
export const state = () => ({
  list: [
    {
      label: 'CH',
      value: zhCN,
    },
    {
      label: 'EN',
      value: enGB,
    },
    {
      label: 'JP',
      value: jaJP,
    },
  ],
  index: 0,
});

export const getters = {
  languages: state => state.list,
  language: state => state.list.find((item, index) => index === state.index),
};

export const actions = {};

export const mutations = {
  changeLanguage(state, index) {
    state.index = index;
  },
};
