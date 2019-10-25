import Vue from 'vue';
import {
  Layout,
  Menu,
  Icon,
  Button,
  LocaleProvider,
  Form,
  Row,
  Col,
  Select,
  DatePicker,
  Tabs,
  Input,
  Table,
  Card,
  Avatar,
  Divider,
  Checkbox,
  Radio,
  InputNumber,
  Switch,
  Cascader,
} from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1432163_4klhx4io2ql.js',
  extraCommonProps: {
    props: {
      style: {
        type: Object,
      },
    },
  },
});

export default () => {
  Vue.component('icon-font', IconFont);
  Vue.use(Layout);
  Vue.use(Menu);
  Vue.use(Icon);
  Vue.use(Button);
  Vue.use(LocaleProvider);
  Vue.use(Form);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Select);
  Vue.use(DatePicker);
  Vue.use(Tabs);
  Vue.use(Input);
  Vue.use(Table);
  Vue.use(Card);
  Vue.use(Avatar);
  Vue.use(Divider);
  Vue.use(Checkbox);
  Vue.use(Radio);
  Vue.use(InputNumber);
  Vue.use(Switch);
  Vue.use(Cascader);
};
