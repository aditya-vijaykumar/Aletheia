import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Aletheia from "./views/Aletheia.vue";
import Start from "./views/Start.vue";
import StartFooter from "./layout/StartFooter.vue"
import StartHeader from "./layout/StartHeader.vue"
import Account from "./views/Account.vue"
import Edit from "./views/Edit.vue"
import Explore from "./views/Explore.vue"

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    
    {
      path: "/",
      name: "aletheia",
      components: {
        header: AppHeader,
        default: Aletheia,
        footer: AppFooter
      }
    },
    {
      path: "/start",
      name: "start",
      components: {
        header: StartHeader,
        default: Start,
        footer: StartFooter
      }
    },
    {
      path: "/account",
      name: "account",
      components: {
        header: StartHeader,
        default: Account,
        footer: StartFooter
      }
    },
    {
      path: "/edit",
      name: "edit",
      components: {
        header: StartHeader,
        default: Edit,
        footer: StartFooter
      }
    },
    {
      path: "/explore",
      name: "explore",
      components: {
        header: StartHeader,
        default: Explore,
        footer: StartFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});