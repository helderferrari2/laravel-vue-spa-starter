import axios from "axios";
import { AuthService } from "@/services/auth.service";
import store from "@/store/store";
const API_URL = `http://127.0.0.1:3000/api`;

//Default Axios Config
const api = axios.create({
    baseURL: API_URL,
    timeout: 60000, //1 minute
    headers: {
        post: {
            Accept: "application/json"
        }
    }
});

// Request interceptor
api.interceptors.request.use(
    request => {
        let token = AuthService.getToken();
        if (token) request.headers.common["Authorization"] = `Bearer ${token}`;
        return request;
    },
    error => {
        Promise.reject(error);
    }
);

//Response Interceptor
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const { status } = error.response;

        //Unauthenticated
        if (status === 401) {
            store.dispatch("logout");
            router.push({ name: "login" });
        }

        return Promise.reject(error);
    }
);

export default api;
