<template>
    <div>
        <header-component></header-component>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="login-card mt-5">
                        <div class="card">
                            <div class="card-header">Login</div>
                            <div class="card-body">
                                <!-- Alert -->
                                <alerts
                                    v-show="errorMessages.length"
                                    :type="'danger'"
                                    :messages="errorMessages"
                                />

                                <!--Login Form-->
                                <form @submit.prevent="login">
                                    <login-form
                                        :formData="formData"
                                    ></login-form>
                                </form>
                                <!--End Login Form-->
                            </div>
                        </div>
                    </div>
                    <div class="alert alert-light" role="alert">
                        <ul class="pl-3">
                            <li>Email: admin@admin.com</li>
                            <li>Password: 12345678</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm";
import Alerts from "@/components/helpers/Alerts";
import HeaderComponent from "@/pages/layouts/Header";

export default {
    components: {
        LoginForm,
        Alerts,
        HeaderComponent
    },

    data() {
        return {
            formData: {
                email: "",
                password: ""
            },
            errorMessages: []
        };
    },

    methods: {
        login() {
            this.$validator.validateAll().then(valid => {
                if (!valid) return;

                this.errorMessages = [];

                this.$store
                    .dispatch("login", this.formData)
                    .then(response => this.$router.push({ name: "home" }))
                    .catch(error => (this.errorMessages = error));
            });
        }
    }
};
</script>
