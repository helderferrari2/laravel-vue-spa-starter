<template>
  <div class="main">
    <div class="main__header">
      <header-component></header-component>
    </div>
    <div class="main__body">
      <div class="main__body__content">
        <transition name="fade">
          <router-view></router-view>
        </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
