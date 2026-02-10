import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']  
})
export class Login {

  email = '';
  password = '';
  mobile = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  loginEmail() {
    const success = this.auth.login(this.email, this.password);
    if (success) this.router.navigate(['/home']);
  }

  sendOtp() {
    this.auth.sendOtp(this.mobile);
    this.router.navigate(['/otp']);
  }

  social(provider: 'google' | 'facebook' | 'apple') {
    this.auth.socialLogin(provider);
    this.router.navigate(['/home']);
  }
}
