import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList {

  constructor(private cart: Cart) {}

  products = [
    {
      id: 1,
      title: 'Vintage Coat',
      img: 'assets/images/product1.png',
      price: 49.99,
      old: 99.99,
      badge: 'Newest',
      size: ['S', 'M', 'L']
    },
    {
      id: 2,
      title: 'Retro Jacket',
      img: 'assets/images/product2.png',
      price: 69.99,
      old: 129.99,
      badge: '',
      size: ['M', 'L', 'XL']
    },
    {
      id: 3,
      title: 'Classic Dress',
      img: 'assets/images/product3.png',
      price: 39.99,
      old: 79.99,
      badge: 'Trending',
      size: ['S', 'M']
    },
    {
      id: 4,
      title: 'Denim Shirt',
      img: 'assets/images/product4.png',
      price: 29.99,
      old: 59.99,
      badge: '',
      size: ['M', 'L']
    }
  ];

  addToCart(product: any) {
    this.cart.add(product);
  }

  buyNow(product: any) {
    this.cart.add(product);
    alert('Buying: ' + product.title);
  }
}
