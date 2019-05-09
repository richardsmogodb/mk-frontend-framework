import Vue from 'vue';
// import Antd from 'ant-design-vue/lib';
import Layout from 'ant-design-vue/lib/layout';
import Icon from 'ant-design-vue/lib/icon';
import Button from 'ant-design-vue/lib/button';
import LocaleProvider from 'ant-design-vue/lib/locale-provider';

export default () => {
  // Vue.use(Antd);
  Vue.use(Layout);
  Vue.use(Icon);
  Vue.use(Button);
  Vue.use(LocaleProvider);
};
