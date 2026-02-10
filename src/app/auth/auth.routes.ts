import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Otp } from './otp/otp';
import { ForgotPassword } from './forgot-password/forgot-password';

export const authRoutes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'otp', component: Otp },
  { path: 'forgot-password', component: ForgotPassword }
];
