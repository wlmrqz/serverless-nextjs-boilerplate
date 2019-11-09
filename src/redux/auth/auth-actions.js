import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_INITIAL,
} from './auth-action-types';

export const authLoading = (payload) => ({
  type: AUTH_LOADING,
  payload,
});

export const authSuccess = (payload) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authFailure = (payload) => ({
  type: AUTH_FAILURE,
  payload,
});

export const authInitial = (payload) => ({
  type: AUTH_INITIAL,
  payload,
});

export const authAuthenticate = () => (dispatch) => {
  dispatch(authLoading(true));
};
