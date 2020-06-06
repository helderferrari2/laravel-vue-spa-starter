import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes.map";
import { checkUserAuth, checkAccessMiddleware } from "@/router/middlewares";

//ROUTES
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach(checkUserAuth);
router.beforeEach(checkAccessMiddleware);

export default router;
