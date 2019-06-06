import { SET_TOKEN } from '@/store/auth';
import { COOKIE_TOKEN_KEY } from '@/utils/auth';

export default async ({ store, query, redirect, req }) => {
  if (process.server) {
    const tokenInCookie = req.ctx.cookies.get(COOKIE_TOKEN_KEY);
    if (tokenInCookie) {
      store.commit(`auth/${SET_TOKEN}`, tokenInCookie);
    } else if (query.ticket) {
      const newCookie = await store.dispatch(
        'auth/getTokenByTicket',
        query.ticket
      );
      req.ctx.cookies.set(COOKIE_TOKEN_KEY, newCookie, { httpOnly: false });
    }
  }
};
