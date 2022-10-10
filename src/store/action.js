import {LOGININ, LOGOUT, REFRESHTOKEN} from './actionType';

export const loginIn = (token, data) => ({
  type: LOGININ,
  token: token,
  data: data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const freshToken = token => ({
  type: REFRESHTOKEN,
  payLoad: token,
});
