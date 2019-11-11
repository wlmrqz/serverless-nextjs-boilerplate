import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_INITIAL,
} from './auth-action-types';

export const authLoadingAction = (payload) => ({
  type: AUTH_LOADING,
  payload,
});

export const authSuccessAction = (payload) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authFailureAction = (payload) => ({
  type: AUTH_FAILURE,
  payload,
});

export const authInitialAction = (payload) => ({
  type: AUTH_INITIAL,
  payload,
});

export const authLoginAction = () => (dispatch) => {
  try {
    dispatch(authLoadingAction(true));
  } catch (error) {
    dispatch(authFailureAction(error));
  }
};
