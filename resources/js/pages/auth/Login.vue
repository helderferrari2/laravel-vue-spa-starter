<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="login-card">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form @submit.prevent="login">
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

                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    v-validate="'required|min:6|max:20'"
                    :class="{'form-control': true, 'is-invalid': errors.has('password')}"
                    v-model="formData.password"
                    maxlength="20"
                  />
                  <div class="invalid-feedback">{{ errors.first("password") }}</div>
                </div>
                <button type="submit" class="btn btn-outline-dark">Submit</button>
              </form>
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
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    login() {
      //Using vee validate to check form on submit
      this.$validator.validateAll().then(result => {
        if (result) {
          //Call login function on store
          this.$store
            .dispatch("login", this.formData)
            .then(response => this.$router.push({ name: "home" }))
            .catch(error => this.$snotify.error(error));
        }
      });
    }
  }
};
</script>


<style scoped>
.login-card {
  margin-top: 120px;
}
</style>

