import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Auth {

  private readonly ROLE_KEY = 'role';
  private readonly LOGIN_KEY = 'loggedIn';

  // ✅ Email login
  login(email: string, password: string): 'ADMIN' | 'USER' | null {

    // Hardcoded admin (learning phase ke liye OK)
    if (email === 'ram@gmail.com' && password === '12345') {
      localStorage.setItem(this.LOGIN_KEY, 'true');
      localStorage.setItem(this.ROLE_KEY, 'ADMIN');
      return 'ADMIN';
    }

    // Normal user
    if (email && password) {
      localStorage.setItem(this.LOGIN_KEY, 'true');
      localStorage.setItem(this.ROLE_KEY, 'USER');
      return 'USER';
    }

    return null;
  }

  signup(user: any) {
    console.log('Signup', user);
  }

  // ✅ OTP login → always USER
  sendOtp(mobile: string) {
    console.log('Send OTP to', mobile);
  }

  verifyOtp(otp: string) {
    console.log('Verify OTP', otp);
    localStorage.setItem(this.LOGIN_KEY, 'true');
    localStorage.setItem(this.ROLE_KEY, 'USER');
  }

  // ✅ Social login → USER
  socialLogin(provider: string) {
    console.log('Social login via', provider);
    localStorage.setItem(this.LOGIN_KEY, 'true');
    localStorage.setItem(this.ROLE_KEY, 'USER');
  }

  logout() {
    localStorage.removeItem(this.LOGIN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.LOGIN_KEY) === 'true';
  }

  getRole(): 'ADMIN' | 'USER' | null {
    return localStorage.getItem(this.ROLE_KEY) as any;
  }
}