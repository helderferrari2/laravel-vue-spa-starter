<template>
  <div>
    <header-component></header-component>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="register-card mt-5">
            <div class="card">
              <div class="card-header">Register</div>
              <div class="card-body">
                <!-- Alert -->
                <alerts v-show="errorMessages.length" :type="'danger'" :messages="errorMessages" />

                <!--Register Form-->
                <form @submit.prevent="register">
                  <user-form :formData="formData"></user-form>
                </form>
                <!--End Register Form-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alerts from "@/components/helpers/Alerts";
import UserForm from "@/components/forms/UserForm";
import HeaderComponent from "@/pages/layouts/Header";

export default {
  components: {
    Alerts,
    UserForm,
    HeaderComponent
  },

  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errorMessages: []
    };
  },

  methods: {
    register() {
      this.$validator.validateAll().then(valid => {
        if (!valid) return;

        this.errorMessages = [];

        //Call register function on store
        this.$store
          .dispatch("userStore", this.formData)
          .then(response => {
            this.$snotify.success("Success!!!");
            this.$router.push({ name: "login" });
          })
          .catch(error => (this.errorMessages = error));
      });
    }
  }
};
</script>
