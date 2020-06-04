<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="register-card">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">

              <!-- Alert -->
              <alerts v-show="errorMessages.length" :type="'danger'" :messages="errorMessages" />

              <!--Register Form-->
              <form @submit.prevent="register">
                <!--Name-->
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    v-validate="'required|alpha_dash'"
                    :class="{'form-control': true,'is-invalid': errors.has('name')}"
                    v-model="formData.name"
                    maxlength="50"
                  />
                  <div class="invalid-feedback">{{ errors.first("name") }}</div>
                </div>

                <!--Email-->
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    v-validate="'required|email'"
                    :class="{'form-control': true,'is-invalid': errors.has('email')}"
                    v-model="formData.email"
                    maxlength="50"
                  />
                  <div class="invalid-feedback">{{ errors.first("email") }}</div>
                </div>

                <!--Password-->
                <div class="form-row">
                  <div class="form-group col">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      v-validate="'required|min:6|max:20'"
                      :class="{'form-control': true, 'is-invalid': errors.has('password')}"
                      v-model="formData.password"
                      maxlength="20"
                      ref="password"
                    />
                    <div class="invalid-feedback">{{ errors.first("password") }}</div>
                  </div>
                  <div class="form-group col">
                    <label for="password_confirmation">Password Confirmation</label>
                    <input
                      type="password"
                      name="password_confirmation"
                      v-validate="'required|confirmed:password'"
                      :class="{'form-control': true, 'is-invalid': errors.has('password_confirmation')}"
                      v-model="formData.password_confirmation"
                      maxlength="20"
                    />
                    <div class="invalid-feedback">{{ errors.first("password_confirmation") }}</div>
                  </div>
                </div>

                <button type="submit" class="btn btn-outline-dark">Submit</button>
              </form>
              <!--End Register Form-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alerts from "@/components/helpers/Alerts";

export default {
  components: {
    Alerts
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
      //Using vee validate to check form on submit
      this.$validator.validateAll().then(result => {
        if (result) {

          this.errorMessages = []

          //Call register function on store
          this.$store
            .dispatch("userStore", this.formData)
            .then(response => {
              this.$snotify.success("Success!!!");
              this.$router.push({ name: "login" });
            })
            .catch(error => this.errorMessages = error);
        }
      });
    },
  }
};
</script>


<style scoped>
.register-card {
  margin-top: 120px;
}
</style>

