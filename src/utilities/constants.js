export const APPNAME = 'Environmental Monitor'

export const GET_METHOD = 'GET'
export const POST_METHOD = 'POST'
export const PUT = 'PUT'
export const DELETE_METHOD = 'DELETE'
export const BASE_URL = process.env.NODE_ENV === 'development' ?
    'http://localhost:3000' :
    'https://172.104.45.207'