import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp.html',
  styleUrls: ['./otp.scss']
})
export class Otp {

  otp = '';

  constructor(private auth: Auth) {}

  verify() {
    this.auth.verifyOtp(this.otp);
  }
}
