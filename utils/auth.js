const TOKEN = 'token';

export const loginUrl = 'http://www.baidu.com';

export const setTokenForLocalStorage = token => {
  return window.localStorage.setItem(TOKEN, token);
};

export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem(TOKEN);
};

export const removeTokenFromLocalStorage = () => {
  window.localStorage.removeItem(TOKEN);
};
