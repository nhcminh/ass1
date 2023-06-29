import home from "./pages/home.js";
import signin from "./pages/signin.js";
import signup from "./pages/signup.js";
import { requireAuth } from "./auth/middleware.js";
const routes = [
  { path: "/", component: home, meta: { requiresAuth: true } },
  { path: "/home", component: home, meta: { requiresAuth: true } },
  { path: "/sign-in", component: signin },
  { path: "/sign-up", component: signup },
];
const router = new VueRouter({ routes });
router.beforeEach(requireAuth);
new Vue({
  el: "#app",
  router: router,
  template: `
  <v-app>
    <router-view></router-view>
  </v-app>
`,
  vuetify: new Vuetify(),
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    checkLogin() {
      this.isLogin = localStorage.getItem("token") ? true : false;
      console.log(this.isLogin);
    },
  },
  created() {
    this.checkLogin();
  },
});
