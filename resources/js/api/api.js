import axios from "axios";
import { getToken } from "@/store/modules/auth/auth.service";
import router from "@/router/routes";
import store from "@/store/store";

//Environment
let production = false;
export const BASE_URL = production
    ? "http://project_name.com"
    : "http://127.0.0.1:3000/api";

//Default Axios Config
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        post: {
            Accept: "application/json"
        }
    }
});

// Request interceptor
api.interceptors.request.use(function(request) {
    let token = getToken();
    if (token) {
        request.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return request;
});

// Response interceptor
api.interceptors.response.use(response => response, error => {
        const { status } = error.response;

        //Add all errors response here

        //Unauthenticated
        if (status === 401) {
            store.dispatch("logout");
            router.push({ name: "login" });
        }

        return Promise.reject(error);
    }
);

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
