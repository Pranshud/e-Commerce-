import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Auth {

  login(email: string, password: string): boolean {
    console.log('Login with', email, password);
    localStorage.setItem('loggedIn', 'true');
    return true;
  }

  signup(user: any) {
    console.log('Signup', user);
  }

  sendOtp(mobile: string) {
    console.log('Send OTP to', mobile);
  }

  verifyOtp(otp: string) {
    console.log('Verify OTP', otp);
    localStorage.setItem('loggedIn', 'true');
  }

  socialLogin(provider: string) {
    console.log('Social login via', provider);
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
