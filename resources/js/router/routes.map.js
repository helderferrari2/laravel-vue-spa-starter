import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Template from "@/pages/layouts/Template";
import Home from "@/pages/home/Home";


const routes = [

    //Login
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },

    //Home
    {
        path: "/",
        component: Template,
        meta: { requiresAuth: true },
        children: [
            {
                path: "/home",
                name: "home",
                component: Home
            },
        ]
    }

    // Page not found
    // {
    //     path: "*",
    //     // redirect: "/errors",
    //     component: Errors
    // }
];

export default routes;
