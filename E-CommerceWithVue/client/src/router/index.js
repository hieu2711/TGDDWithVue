import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PhoneCategoryView from '../views/PhoneCategoryView.vue'
import LaptopCategoryView from '../views/LaptopCategoryView.vue'
import TabletCategoryView from '../views/TabletCategoryView.vue'
import AccessoryCategoryView from '../views/AccessoryCategoryView.vue'
import SmartWatchCategoryView from '../views/SmartWatchCategoryView.vue'
import WatchCategoryView from '../views/WatchCategoryView.vue'
import FlashSaleView from '../views/FlashSaleView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/phone',
    name: 'phoneCategory',
    component: PhoneCategoryView
  },
  {
    path: '/laptop',
    name: 'laptopCategory',
    component: LaptopCategoryView
  },
  {
    path: '/tablet',
    name: 'tabletCategory',
    component: TabletCategoryView
  },
  {
    path: '/accessories',
    name: 'AccessoryCategory',
    component: AccessoryCategoryView
  },
  {
    path: '/smartwatch',
    name: 'SmartwatchCategory',
    component: SmartWatchCategoryView
  },
  {
    path: '/watch',
    name: 'WatchCategory',
    component: WatchCategoryView
  },
  {
    path: '/flash-sale',
    name: 'FlashSale',
    component: FlashSaleView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
