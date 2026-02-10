import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart } from '../services/cart';
import { Header } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, FooterComponent],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.scss']
})
export class CartPage implements OnInit {

  cartItems: any[] = [];
  filteredItems: any[] = [];

  selectedSize = '';
  priceSort = '';
  allSizes = ['S', 'M', 'L', 'XL'];

  couponCode = '';
  discount = 0;

  priceSummary = {
    mrp: 0,
    discount: 0,
    tax: 0,
    shipping: 40,
    total: 0
  };

  constructor(private cart: Cart) {}

  ngOnInit() {
    this.cart.items$.subscribe(items => {
      this.cartItems = items;
      this.applyFilters();
      this.calculatePrice();
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

  updateQty(item: any, change: number) {
    this.cart.updateQty(item.id, change);
  }

  remove(id: number) {
    this.cart.remove(id);
  }

  saveForLater(item: any) {
    this.cart.saveForLater(item);
  }

  applyCoupon() {
    if (this.couponCode === 'SAVE10') {
      this.discount = 10;
    } else {
      this.discount = 0;
    }
    this.calculatePrice();
  }

  calculatePrice() {
    const mrp = this.cartItems.reduce((s, i) => s + i.price * i.qty, 0);
    const discountAmt = mrp * (this.discount / 100);
    const tax = Math.round((mrp - discountAmt) * 0.18);

    this.priceSummary.mrp = mrp;
    this.priceSummary.discount = Math.round(discountAmt);
    this.priceSummary.tax = tax;
    this.priceSummary.total =
      mrp - discountAmt + tax + this.priceSummary.shipping;
  }

  checkout() {
    alert('Guest checkout → Address → Shipping → Payment');
  }
}
