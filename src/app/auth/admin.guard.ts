import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth';

@Injectable({ providedIn: 'root' })
export class AdminGuard {

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  canActivate(): boolean {

    if (this.auth.isLoggedIn() && this.auth.getRole() === 'ADMIN') {
      return true;
    }

    // agar admin nahi hai
    this.router.navigate(['/auth/login']);
    return false;
  }
}