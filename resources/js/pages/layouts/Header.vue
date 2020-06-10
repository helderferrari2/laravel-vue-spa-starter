<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <router-link :to="{ name: 'home' }" class="navbar-brand"
                >SPA-VUE-STARTER</router-link
            >
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div v-if="authenticated" class="ml-auto">
                    <ul class="navbar-nav">
                        <li>
                            <a class="nav-link" @click.prevent="logout"
                                >Logout</a
                            >
                        </li>
                    </ul>
                </div>
                <div v-else class="ml-auto">
                    <ul class="navbar-nav">
                        <li>
                            <router-link
                                :to="{ name: 'login' }"
                                class="nav-link"
                                >Login</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'register' }"
                                class="nav-link"
                                >Register</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        authenticated() {
            return this.$store.state.auth.authenticated;
        }
    },

    methods: {
        logout() {
            this.$store
                .dispatch("logout")
                .then(response => this.$router.push({ name: "login" }));
        }
    }
};
</script>
