import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Singleplayer from './Singleplayer.vue';
import anasayfa from "./anasayfa.vue";
import Multiplayer from "./Multiplayer.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: anasayfa // Burada anasayfa adında bir Vue bileşeni kullanılıyor
  },
  {
    path: '/singleplayer',
    component: Singleplayer // Burada singleplayer adında bir Vue bileşeni kullanılıyor
  },
  {
    path: '/multiplayer',
    component: Multiplayer // Burada multiplayer adında bir Vue bileşeni kullanılıyor
  },
  // Daha fazla sayfa tanımlayabilirsiniz
]
const router = new VueRouter({
  routes,
  mode: 'history', // URL'lerde # işareti olmadan kullanmak için
});

export default router;
