import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/Home";
import UserProfile from "../components/UserProfile"
import UserPosts from "../components/UserPosts";
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: "/user/:id",
      name: "UserProfile",
      component: UserProfile
    },
    {
      path: "/user/:userId/posts",
      name: "UserPosts",
      component: UserPosts
    }
  ],
  mode: "history"
})
