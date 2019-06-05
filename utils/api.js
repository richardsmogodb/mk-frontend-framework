/*
 ** mehtod_name: url[string, function]
 */
export default {
  GET_auth: ticket => `/auth/getToken?ticket=${ticket}`,
  GET_getAccounts: '/accounts',
  GET_getAccount: id => `/accounts/${id}`,
  POST_newAccount: '/accounts',
  DELETE_deleteAccount: id => `/accounts/${id}`,
};
