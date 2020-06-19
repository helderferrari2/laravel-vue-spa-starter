import api from "@/services/http.service";

const endpoint = {
    /**
     * ---------------------------------------------------------------------------------------
     * Authentication
     * ---------------------------------------------------------------------------------------
     */
    apiLogin(params) {
        return api.post("/login", params);
    },

    apiUserStore(params) {
        return api.post("/users", params);
    },

    apiGetUserAuth() {
        return api.post("/me");
    },

    /**
     * ---------------------------------------------------------------------------------------
     * User
     * ---------------------------------------------------------------------------------------
     */
    apiUpdateUser(params) {
        let { id, ...rest } = params;
        return api.put(`/users/${id}`, rest);
    }
};

export default endpoint;
