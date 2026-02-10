import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';

@Component({
  selector: 'app-forgot-password',
  standalone: true,          
  imports: [
    CommonModule,
    FormsModule             
  ],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss']
})
export class ForgotPassword {

  email = '';

  constructor(private auth: Auth) {}

/*   reset() {
    this.auth.resetPassword(this.email);
  } */
}
