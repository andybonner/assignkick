import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from '../util/cookie-utils';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST
} from './types';

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

export function loginUser({ email, password }) {
  return function (dispatch) {
    axios.post('/api/auth/login', { email, password })
      .then(response => {
        setCookie('token', response.data.token, { maxAge: response.tokenExpiration });
        console.log(response);
        dispatch({
          type: AUTH_USER,
          user: response.data.user
        });
      })
      .catch((error) => {
        console.log('the mystery error is:', error)
        errorHandler(dispatch, error.response, AUTH_ERROR)
      });
  }
}

export function registerUser({ email, firstName, lastName, password }) {
  return function (dispatch) {
    axios.post(`/api/auth/register`, { email, firstName, lastName, password })
      .then(response => {
        setCookie('token', response.data.token, { maxAge: response.tokenExpiration });
        dispatch({
          type: AUTH_USER,
          user: response.data.user
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      });
  }
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER });
    deleteCookie('token');
  }
}

export function protectedTest() {
  return function (dispatch) {
    axios.get(`api/protected`, {
      headers: { 'Authorization': getCookie('token') }
    })
      .then(response => {
        dispatch({
          type: PROTECTED_TEST,
          payload: response.data.content
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      });
  }
}