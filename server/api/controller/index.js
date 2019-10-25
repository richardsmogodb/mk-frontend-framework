const avaliable = 1800000;
const sleep = async (ms) => {
  const delay = ms || ((Math.random() * 100) | 0);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, delay)
  })
}

module.exports = {
  _getToken: {
    url: '/auth/getToken',
    method: 'get',
    route: async ctx => {
      const { ticket } = ctx.query;
      let data = {
        code: -1,
        result: '',
      };

      if (ticket) {
        data = {
          code: 0,
          result: Date.now(),
        };
      }

      await sleep();
      ctx.response.body = data;
    },
  },
  _getAccounts: {
    url: '/accounts',
    method: 'get',
    route: async ctx => {
      const token = ctx.headers.authtoken || 0;
      const auth = Date.now() - token <= avaliable;
      const data = {
        code: 0,
        result: [
          {
            uid: 1,
            userName: '测试1',
          },
          {
            uid: 2,
            userName: '测试2',
          },
        ],
      };

      if (!token || !auth) {
        ctx.throw(401, 'unAuth');
        return;
      }

      await sleep();
      ctx.response.body = data;
    },
  },
  _getAccount: {
    url: '/account/:uid',
    method: 'get',
    route: async ctx => {
      const token = ctx.headers.authtoken || 0;
      const auth = Date.now() - token <= avaliable;
      const data = {
        code: 0,
        result: {
          userName: ctx.params.uid,
        },
      };

      if (!token || !auth) {
        ctx.throw(401, 'unAuth');
        return;
      }

      await sleep();
      ctx.response.body = data;
    },
  },
};
