require("./bootstrap");
window.Vue = require("vue");
import router from "@/router/routes";
import store from "@/store/store";
import Snotify from "vue-snotify";
import VeeValidate from "vee-validate";
Vue.use(Snotify);
Vue.use(VeeValidate);

//VUEJS configuration
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

const app = new Vue({
    el: "#app",
    router,
    store
});
