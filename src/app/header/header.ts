import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  activeTab: 'home' | 'catalog' | 'projects' | 'contact' = 'home';

  cartCount = 3;

  catalog = ['Angular UI Kit', 'Admin Dashboard', 'REST APIs'];

  projects = [
    { name: 'Vintage Coat' },
    { name: 'Retro Jacket' },
    { name: 'Classic Dress' },
    { name: 'Denim Shirt' }
  ];

   selectTab(tab: any) {
    this.activeTab = tab;
  }

  addToCart() {
    this.cartCount++;
  }

  buyNow(product: any) {
    alert('Buying product: ' + product.name);
  }


}
