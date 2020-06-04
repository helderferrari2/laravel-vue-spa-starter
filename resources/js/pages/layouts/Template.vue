<template>
  <div class="main">
    <div class="main__header">
      <header-component></header-component>
    </div>
    <div class="main__body">
      <div class="main__body__content">
        <router-view></router-view>
      </div>
      <div class="main__body__footer">
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/pages/layouts/Header";
import FooterComponent from "@/pages/layouts/Footer";

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style scoped>
body {
  margin: 0;
}

.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main__header {
  width: 100%;
}

.main__body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.main__body__content {
  flex-grow: 1;
  margin: 20px 0 20px 0;
}

.main__body__footer {
  width: 100%;
}
</style>