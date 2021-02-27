
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/cart', component: () => import('pages/CartPage.vue') },
      { path: '/products/add', component: () => import('pages/ProductAddOrEditProductPagePage.vue') },
      { path: '/auth', component: () => import('pages/AuthPage.vue') },
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
