import api from '@/utils/api';
import { loginUrl, removeTokenFromLocalStorage } from '@/utils/auth';

export default ({ $axios, store, redirect }) => {
  /*
   ** 拓展业务请求
   */
  Object.keys(api).forEach(key => {
    const method = key.split('_')[0].toLowerCase();
    const name = `_${key.split('_')[1]}`;
    const url = api[key];
    if (typeof url === 'function') {
      $axios[name] = (query, params) => {
        return $axios[method](url(query), (params = {}));
      };
    } else {
      $axios[name] = params => $axios[method](url, (params = {}));
    }
  });
  /*
   ** 客户端请求携带token
   */
  $axios.onRequest(config => {
    const tokenInStore = store.getters['auth/token'];
    if (tokenInStore) {
      config.headers.authToken = tokenInStore;
    }
  });
  /*
   ** 请求返回处理逻辑
   */
  $axios.onResponse(response => {
    // console.log(response.data);
  });
  /*
   ** 请求错误处理逻辑
   */
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    switch (code) {
      case 400:
        redirect('/400');
        break;
      case 401:
        if (!process.server) removeTokenFromLocalStorage();
        redirect(loginUrl);
        break;
    }
  });
};
