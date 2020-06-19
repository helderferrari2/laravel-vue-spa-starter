<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">LARAVEL_VUE_SPA_STARTER</router-link>
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
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto"></ul>

          <!-- Right Side Of Navbar -->
          <!-- Authentication Links -->
          <div v-if="authenticated" class="ml-auto">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >{{user.name}}</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link :to="{ name: 'profile' }" class="dropdown-item">Edit</router-link>
                  <a class="dropdown-item" @click.prevent="logout">Logout</a>
                </div>
              </li>
            </ul>
          </div>
          <div v-else class="ml-auto">
            <ul class="navbar-nav ml-auto">
              <li>
                <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
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
