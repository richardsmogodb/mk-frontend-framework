import { LOGIN_URL, COOKIE_TOKEN_KEY } from '@/utils/auth';

export default ({ $axios, store, redirect, req }) => {
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
  $axios.onResponse(response => {});
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
        if (process.server) {
          req.ctx.cookies.set(COOKIE_TOKEN_KEY, null);
        } else {
          document.cookie = `${COOKIE_TOKEN_KEY}=`;
        }
        redirect(LOGIN_URL);
        break;
    }
  });
};
