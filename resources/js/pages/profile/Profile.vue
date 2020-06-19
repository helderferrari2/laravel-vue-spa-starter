<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="card mt-5">
          <div class="border-bottom text-center">
            <!-- User Avatar -->
            <div class="m-3 mx-auto">
              <img class="rounded-circle" src="/assets/images/user_no_image.png" width="110" />
            </div>

            <!--Body-->
            <div class="list-group mt-3" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                id="list-profile-list"
                data-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="profile"
              >Profile</a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings"
              >Settings</a>
            </div>
          </div>
        </div>
      </div>

      <!--Content-->
      <div class="col-8">
        <div class="tab-content m-5" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <h1>Profile</h1>
            <!-- User Data -->
            <span class="text-muted d-block">Name: {{user.name}}</span>
            <span class="text-muted d-block">E-mail: {{user.email}}</span>
          </div>
          <div
            class="tab-pane fade"
            id="list-settings"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            <h1>Profile Edit</h1>
            <!--Profile Form-->
            <form @submit.prevent="updateUser">
              <user-form :formData="formData"></user-form>
            </form>
            <!--End Profile Form-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/forms/UserForm";

export default {
  components: {
    UserForm
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },

  mounted() {
    this.formData = this.user;
  },

  data() {
    return {
      formData: {
        id: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errorMessages: []
    };
  },

  methods: {
    updateUser() {
      this.$validator.validateAll().then(valid => {
        if (!valid) return;

        this.errorMessages = [];
        this.$store
          .dispatch("updateUser", this.formData)
          .then(response => {
            this.$snotify.success("Success!!!");
          })
          .catch(error => (this.errorMessages = error));
      });
    }
  }
};
</script>
