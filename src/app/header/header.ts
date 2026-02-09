import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {

  activeTab: 'home' | 'catalog' | 'projects' | 'contact' | null = null;
  showModal = false;

  cartCount = 0;
  cartItems: any[] = [];

  catalog = [
    { name: 'Men Clothing', count: 120 },
    { name: 'Women Clothing', count: 180 },
    { name: 'Footwear', count: 75 },
    { name: 'Accessories', count: 60 },
    { name: 'Sale', count: 30 }
  ];

  constructor(private cart: Cart, private router: Router) {}

  ngOnInit() {
    this.cart.items$.subscribe(items => {
      this.cartItems = items;
      this.cartCount = items.length;
    });
  }

  selectTab(tab: 'home' | 'catalog' | 'projects' | 'contact') {
    if (tab === 'home') {
      this.showModal = false;
      this.activeTab = null;
      this.router.navigate(['/']);
      return;
    }

    this.activeTab = tab;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.activeTab = null;
  }
}
