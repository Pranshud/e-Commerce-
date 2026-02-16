import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp.html',
  styleUrls: ['./otp.scss']
})
export class Otp {

  otp1 = '';
  otp2 = '';
  otp3 = '';
  otp4 = '';

  @ViewChildren('otpInput') inputs!: QueryList<ElementRef>;

  constructor(private router: Router) {}

  onOtpInput(event: any, index: number) {
    const value = event.target.value;

    // numbers only
    if (!/^\d*$/.test(value)) {
      event.target.value = '';
      return;
    }

    // paste case (1234)
    if (value.length > 1) {
      const digits = value.split('');
      [this.otp1, this.otp2, this.otp3, this.otp4] =
        [...digits, '', '', '', ''];

      this.focusInput(4);
      return;
    }

    // normal typing → next box
    if (value && index < 4) {
      this.focusInput(index + 1);
    }
  }

  onBackspace(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace') {
      const currentValue = this.getOtpValue(index);

      if (!currentValue && index > 1) {
        this.focusInput(index - 1);
      }
    }
  }

  focusInput(index: number) {
    const inputArray = this.inputs.toArray();
    inputArray[index - 1]?.nativeElement.focus();
  }

  getOtpValue(index: number): string {
    return [this.otp1, this.otp2, this.otp3, this.otp4][index - 1];
  }

  verifyOtp() {
    const otp = this.otp1 + this.otp2 + this.otp3 + this.otp4;

    if (otp !== '1234') {
      alert('Invalid OTP');
      return;
    }

    this.router.navigate(['/home']);
  }
}