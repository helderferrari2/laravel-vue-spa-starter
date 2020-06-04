import axios from "axios";
import { getToken } from "@/store/modules/auth/auth.service";

//Environment
let production = false;
export const BASE_URL = production ? "http://project_name.com" : "http://127.0.0.1:3000/api";

//Default Axios Config
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        post: {
            Accept: "application/json"
        }
    }
});

//Interceptor
// api.interceptors.request.use(function (config) {
//     let token = getToken();
//     if (token) {
//         config.headers.Authorization = 'Bearer ' + token
//     }
//     return config
// })



/**
 * ---------------------------------------------------------------------------------------
 * Authentication
 * ---------------------------------------------------------------------------------------
 */

export function apiLogin(params) {
    return api.post("/login", params);
}

export function apiUserStore(params) {
    return api.post("/users", params);
}

export function apiGetUserAuth() {
    return api.post("/me");
}
