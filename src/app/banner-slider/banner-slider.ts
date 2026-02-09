import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="banner-slider">
      <img 
        [src]="images[currentIndex]" 
        alt="Banner Image" 
        class="banner-image"
      >
    </div>
  `,
  styleUrls: ['./banner-slider.scss']
})
export class BannerSlider {
  images = [
    'assets/images/A1.png',
    'assets/images/A2.png',
    'assets/images/A3.png'

  ];

  currentIndex = 0;

  constructor() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }
}
