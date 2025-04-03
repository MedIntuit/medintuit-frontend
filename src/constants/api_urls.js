export const BASE_URL = import.meta.env.DEV ? "http://localhost:8080" : import.meta.env.VITE_API_URL; 
export const SIGNUP_URL = "api/auth/signup";
export const LOGIN_URL = "api/auth/signin";
export const CHANNEL_URL = "user-channels";
export const CREATE_CHANNEL_URL = "create-channel";
export const GET_CHANNEL_URL = "get-channel";
