import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Genre from "./views/Genre.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/genre/:id',
      name: 'genre',
      beforeEach(to, form, next){
        let categories = ["tech", "money", "politics", "global", "entertainment", "sports","other", "health", "travel"]
          if (categories.includes(to.params.id)) {
            next()
          }
        next(false)
      },
      component: Genre
    },
    {
      path: "*",
      component: Home
    }
  ]
})
