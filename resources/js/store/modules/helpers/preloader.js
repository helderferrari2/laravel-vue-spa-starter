export default {
    state: {
        isLoading: false
    },
    mutations: {
        PRELOADER(state, param) {
            state.isLoading = param;
        }
    }
};