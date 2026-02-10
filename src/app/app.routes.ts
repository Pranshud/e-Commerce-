import { Routes } from '@angular/router';
import { Home } from './home/home';
import { authRoutes } from './auth/auth.routes';
import { CartPage } from './cart-page/cart-page';

export const routes: Routes = [
  ...authRoutes,
  { path: 'home', component: Home },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'cart',
    component: CartPage
  },

];
