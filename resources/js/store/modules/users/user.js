import { apiUserStore } from "@/api/api";

export default {
    state: {
        user: {}
    },

    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        }
    },

    getters: {},

    actions: {
        userStore(context, params) {
            return new Promise((resolve, reject) => {
                context.commit("PRELOADER", true);
                return apiUserStore(params)
                    .then(response => resolve())
                    // .catch(error => reject(error.response.data.errors))
                    .catch(error => reject(Object.values(error.response.data.errors).map(item => item[0])))
                    .finally(() => context.commit("PRELOADER", false));
            });
        }
    }
};
