
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/cart', component: () => import('pages/CartPage.vue') },
      { path: '/auth', component: () => import('pages/AuthPage.vue') },
      { path: '/products/add', component: () => import('pages/ProductAddOrEditPage.vue') },
      { path: '/products/productId', component: () => import('pages/ProductDetailsPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
