import * as authService from '../services/authService'

export function authenticate(value, redirectToChat) {
    var data = JSON.stringify({ username: value.username.trim(), password: value.password.trim() })
    return authService.postAuthentication(data, redirectToChat)
}

export function register(value, redirectToChat) {
    var data = JSON.stringify({ username: value.username.trim(), password: value.password.trim() })
    return authService.postRegister(data, redirectToChat)
}