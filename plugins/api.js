import { isObject } from '@/utils/tools';

export default ({ $axios, store, req }, inject) => {
  /*
   ** 拓展业务请求
   */
  const api = process.server ? req.ctx.state.api : store.getters.api;
  const $api = {};

  if (process.server) {
    store.dispatch('initApi', api);
  }

  Object.keys(api).forEach(key => {
    const { method, url } = api[key];
    const RESTfull = url.split('/:');

    if (RESTfull.length > 1) {
      const joinUrl = function() {
        let url = RESTfull[0];

        for (let i = 0; i < RESTfull.length - 1; i++) {
          url += `/${arguments[i]}`;
        }
        return url;
      };

      $api[key] = function() {
        const [first, ...rest] = arguments;
        let params = {};
        let args = [...arguments];

        if (isObject(first)) {
          params = first;
          args = [...rest];
        }

        return $axios[method](
          joinUrl(...args),
          method === 'get' ? { params } : params
        );
      };
    } else {
      $api[key] = (params = {}) =>
        $axios[method](url, method === 'get' ? { params } : params);
    }
  });

  inject('api', $api);
};
