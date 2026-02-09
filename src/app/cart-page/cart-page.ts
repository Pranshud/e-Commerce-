import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart } from '../services/cart';
import { Header } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Header,
    FooterComponent
  ],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.scss']
})
export class CartPage implements OnInit {

  cartItems: any[] = [];
  filteredItems: any[] = [];

  selectedSize = '';
  priceSort = '';

  allSizes = ['S', 'M', 'L', 'XL'];

  constructor(private cart: Cart) {}

  ngOnInit() {
    this.cart.items$.subscribe(items => {
      this.cartItems = items;
      this.applyFilters();
    });
  }

  applyFilters() {
    let items = [...this.cartItems];

    if (this.selectedSize) {
      items = items.filter(p => p.size.includes(this.selectedSize));
    }

    if (this.priceSort === 'low') {
      items.sort((a, b) => a.price - b.price);
    }

    if (this.priceSort === 'high') {
      items.sort((a, b) => b.price - a.price);
    }

    this.filteredItems = items;
  }

  ngDoCheck() {
    this.applyFilters();
  }
}
