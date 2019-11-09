import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_INITIAL,
} from './auth-action-types';

const INITIAL_STATE = {
  loading: null,
  success: null,
  failure: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        success: action.payload,
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
        failure: action.payload,
      };
    }
    case AUTH_INITIAL: {
      return {
        ...INITIAL_STATE,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default authReducer;
