import { createWebHistory, createRouter } from "vue-router";
// импорт компонентов
import Login from "./components/Login.vue";

// определяем маршруты
const routes = [
    {
        path: "/Login", // указание маршрута, по которому будем переходить к списку абитуриентов
        name: "Login", // имя маршрута
        alias: "/login", // указание дополнительного маршрута
        component: Login, // компонент, на основании которого будет отрисовываться страница
        meta: {
            title: "Главная"
        }
    },
];

const router = createRouter({
    history: createWebHistory(), // указываем, что будет создаваться история посещений веб-страниц
    routes // подключаем маршрутизацию
});

// указание заголовка компонентам (тега title), заголовки определены в meta
router.beforeEach((to, from, next) => {
    // для тех маршрутов, для которых не определены компоненты, подключается только App.vue
    // поэтому устанавливаем заголовком по умолчанию название "Главная страница"
    document.title = to.meta.title || 'Главная страница';
    next();
});
export default router;