export const APPNAME = 'Environmental Monitor'

export const GET_METHOD = 'GET'
export const POST_METHOD = 'POST'
export const PUT = 'PUT'
export const DELETE_METHOD = 'DELETE'
export const BASE_URL = process.env.NODE_ENV === 'development' ?
    'http://localhost:5000' :
    'http://awseb-e-j-AWSEBLoa-1S6JTSGYEA4YE-463934322.ap-southeast-1.elb.amazonaws.com'