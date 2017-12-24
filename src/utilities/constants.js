export const APPNAME = "Environmental Monitor";

export const GET_METHOD = "GET";
export const POST_METHOD = "POST";
export const PUT = "PUT";
export const DELETE_METHOD = "DELETE";
export const GOOGLE_AUTH = "GOOGLE_AUTH";
export const FB_AUTH = "FB_AUTH";
export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "http://ec2-52-221-209-59.ap-southeast-1.compute.amazonaws.com";
export const GOOGLE_CLIENT_ID =
  process.env.NODE_ENV === "development"
    ? "103484878085-phi6peraepqcu0k1nd06f8569acvhn3t.apps.googleusercontent.com"
    : "";

export const FB_APP_ID =
  process.env.NODE_ENV === "development" ? "134324433930301" : "";
