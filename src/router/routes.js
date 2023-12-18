import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'

export default [
  {
    path: "/home",
    component: Home,
    meta: { show: true }
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false }
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
    name: "search",
    props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: false }
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: { show: false }
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: { show: false }
  },
  {
    path: "/trade",
    name: "trade",
    component: Trade,
    meta: { show: false }
  },
  {
    path: "/pay",
    name: "pay",
    component: Pay,
    meta: { show: false }
  },
  {
    path: "*",
    redirect: "/home"
  }
]