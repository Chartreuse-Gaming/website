import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/tournament/alpine-rivals-2",
        name: "Alpine_Rivals_2",
        component: () =>
            import(
                /* webpackChunkName: "Alpine_Rivals_2" */ "../views/tournaments/AlpineRivals/AlpineRivals2.vue"
            ),
    },
    {
        path: "/tournament/alpine-rivals-1",
        name: "Alpine_Rivals_1",
        component: () =>
            import(
                /* webpackChunkName: "Alpine_Rivals_1" */ "../views/tournaments/AlpineRivals/AlpineRivals1.vue"
            ),
    },
    {
        path: "/tournament/CEC/6",
        name: "CEC6",
        component: () =>
            import(
                /* webpackChunkName: "CEC6" */ "../views/tournaments/CEC/CEC6.vue"
            ),
    },
    {
        path: "/tournament/CEC/5",
        name: "CEC5",
        component: () =>
            import(
                /* webpackChunkName: "CEC5" */ "../views/tournaments/CEC/CEC5.vue"
            ),
    },
    {
        path: "/tournament/CEC/4",
        name: "CEC4",
        component: () =>
            import(
                /* webpackChunkName: "CEC4" */ "../views/tournaments/CEC/CEC4.vue"
            ),
    },
    {
        path: "/tournament/CEC/3",
        name: "CEC3",
        component: () =>
            import(
                /* webpackChunkName: "CEC3" */ "../views/tournaments/CEC/CEC3.vue"
            ),
    },
    {
        path: "/tournament/CEC/2",
        name: "CEC2",
        component: () =>
            import(
                /* webpackChunkName: "CEC2" */ "../views/tournaments/CEC/CEC2.vue"
            ),
    },
    {
        path: "/tournament/CEC/1",
        name: "CEC1",
        component: () =>
            import(
                /* webpackChunkName: "CEC1" */ "../views/tournaments/CEC/CEC1.vue"
            ),
    },
    {
        path: "/tournament/CEC",
        name: "CEC",
        component: () =>
            import(
                /* webpackChunkName: "CEC" */ "../views/tournaments/CEC.vue"
            ),
    },
    {
        path: "/tournament/CGW-2019",
        name: "CGW_2019",
        component: () =>
            import(
                /* webpackChunkName: "CGW_2019" */ "../views/tournaments/CGW_2019.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to, from, SavedPosition) {
        if (to.hash) {
            let id = window.location.href.split("#")[1];
            if (id.length) {
                let yOffset = -90;
                let element = document.getElementById(id);
                if (element) {
                    let y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    return { top: y, behavior: "smooth" };
                }
            }
        } else if (SavedPosition) {
            return SavedPosition;
        } else {
            return { top: 0, behavior: "smooth" };
        }
    },
    routes,
});

export default router;
