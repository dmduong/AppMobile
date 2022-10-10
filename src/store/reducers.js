import {LOGININ, LOGOUT, REFRESHTOKEN} from './actionType';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: '',
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGININ:
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };

    case LOGOUT:
      return {
        ...state,
        isSignout: true,
        userToken: '',
      };

    case REFRESHTOKEN:
      return {
        ...state,
        userToken: action.payLoad,
        isLoading: false,
      };

    default:
      return state;
  }
};
