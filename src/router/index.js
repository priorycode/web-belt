import { createRouter, createWebHistory } from "vue-router";
import Home from '@/view/HomeView.vue';
import AboutView from "@/view/AboutView.vue";
import InicioView from "@/view/InicioView.vue";
import ProjectView from "@/view/ProjectView.vue";
import ServiceView from "@/view/ServiceView.vue";
import BlogView from "@/view/BlogView.vue";
import ContactView from "@/view/ContactView.vue";

const routes = [
    { path: '/', component: Home,
        children: [
            { path: "", name: "inicio", component: InicioView },
            { path: "about", name: "about", component: AboutView },
            { path: "projects", name: "proyectos", component: ProjectView },
            { path: "services", name: "servicios", component: ServiceView },
            { path: "blog", name: "Blog", component: BlogView },
            { path: "contact", name: "contacto", component: ContactView },
        ]
    },
    { path: '/about', component: AboutView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
