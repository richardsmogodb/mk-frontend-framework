import { SET_TOKEN } from '@/store/auth';
import {
  loginUrl,
  setTokenForLocalStorage,
  getTokenFromLocalStorage,
} from '@/utils/auth';

export default async ({ store, query, redirect }) => {
  if (process.server) {
    if (query.ticket) {
      try {
        await store.dispatch('auth/getTokenByTicket', query.ticket);
      } catch (err) {
        console.error(err);
      }
    }
    return;
  }
  const tokenInStore = store.getters['auth/token'];
  const tokenInLocalStorage = getTokenFromLocalStorage();
  if (tokenInStore) {
    if (!tokenInLocalStorage) {
      setTokenForLocalStorage(tokenInStore);
    }
  } else if (tokenInLocalStorage) {
    store.commit(SET_TOKEN, tokenInLocalStorage);
  } else {
    redirect(loginUrl);
  }
};
