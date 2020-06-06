import { apiLogin, apiGetUserAuth } from "@/api/api";
import { getToken, setToken, deleteToken } from "@/store/modules/auth/auth.service";

export default {
    state: {
        user: null,
        authenticated: false
    },

    mutations: {
        AUTH_USER(state, user) {
            (state.authenticated = true), (state.user = user);
        },

        AUTH_USER_LOGOUT(state) {
            state.user = null;
            state.authenticated = false;
        }
    },

    getters: {},

    actions: {
        login(context, params) {
            return new Promise((resolve, reject) => {
                context.commit("PRELOADER", true);
                return apiLogin(params)
                    .then(response => {
                        let { user, token } = response.data.data;
                        context.commit("AUTH_USER", user);
                        setToken(token);
                        resolve(user);
                    })
                    .catch(error => reject(error.response.data.data))
                    .finally(() => context.commit("PRELOADER", false));
            });
        },

        getUserAuth(context) {
            return new Promise((resolve, reject) => {
                context.commit("PRELOADER", true);
                return apiGetUserAuth()
                    .then(response => {
                        context.commit("AUTH_USER", response.data.data);
                        resolve();
                    })
                    .catch(error => reject())
                    .finally(() => context.commit("PRELOADER", false));
            });
        },

        logout(context) {
            deleteToken();
            context.commit("AUTH_USER_LOGOUT");
        }
    }
};
