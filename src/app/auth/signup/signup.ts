import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Auth } from '../auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class Signup {

  user = {
    name: '',
    email: '',
    mobile: '',
    password: ''
  };

  constructor(private auth: Auth) {}

  signup() {
    this.auth.signup(this.user);
  }
}
