import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes.map";
import store from "@/store/store";

//ROUTES
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes
});

//MIDDLEWARE
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.state.auth.authenticated && store.state.auth.user) {
//             next();
//         }else{
//             //atualizar token e depois vai
            
//         }
//     }
//     next("/login");
// });

export default router;
