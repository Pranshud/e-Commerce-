import { Routes } from '@angular/router';

import { Home } from './home/home';
import { CartPage } from './cart-page/cart-page';

import { authRoutes } from './auth/auth.routes';
import { AdminGuard } from './auth/admin.guard';

export const routes: Routes = [

  // 🔐 AUTH ROUTES
  ...authRoutes,

  // 🏠 USER HOME
  {
    path: 'home',
    component: Home
  },

  // 🛒 CART
  {
    path: 'cart',
    component: CartPage
  },

  // 🛠️ ADMIN PANEL (PROTECTED)
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  },

  // 🔁 DEFAULT
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // ❌ FALLBACK
  {
    path: '**',
    redirectTo: 'login'
  }
];