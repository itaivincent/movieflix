
import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import MovieDetail from './components/MovieDetail.vue'
import MyList from './components/MyList.vue'

const routes = [
    { path: '/', component: Home },

    { path:'/login', component: Login },

    { path:'/register', component: Register },

    {path:'/movie/:id', component: MovieDetail },

     { path:'/mylist', component: MyList }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;