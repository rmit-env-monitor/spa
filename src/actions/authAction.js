import * as authService from '../services/authService'
import * as types from './actionTypes';

export function authenticate(value, changeSpin, redirectToChat) {
  var data = JSON.stringify({
    username: value.username.trim(),
    password: value.password.trim()
  })
  return authService.postAuthentication(data, changeSpin, redirectToChat)
}

export function register(value, changeSpin, redirectToChat) {
  var data = JSON.stringify({
    username: value.username.trim(),
    email: value.email.trim(),
    password: value.password.trim()
  })
  return authService.postRegister(data, changeSpin, redirectToChat)
}

export function changeSpinLoaded(loaded) {
  return {
    type: types.UPDATE_SPIN_STATE,
    loaded: loaded
  }
}