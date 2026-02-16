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

  if (!this.email || !this.password) {
    alert('Email and Password required');
    return;
  }

  const role = this.auth.login(this.email, this.password);

  if (!role) {
    alert('Invalid credentials');
    return;
  }

  if (role === 'ADMIN') {
    this.router.navigate(['/admin']);
  } else {
    this.router.navigate(['/home']);
  }
}
sendOtp() {
  if (!this.mobile) {
    alert('Please enter Mobile Number');
    return;
  }

  this.auth.sendOtp(this.mobile);
  this.auth.verifyOtp('dummy'); // learning phase
  this.router.navigate(['/home']);
}
  social(provider: 'google' | 'facebook' | 'apple') {
    this.auth.socialLogin(provider);
    this.router.navigate(['/home']);
  }
}
