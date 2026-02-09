import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { ProductList } from '../product-list/product-list';
import { Promo } from '../promo/promo';
import { FooterComponent } from '../footer/footer';
import { BannerSlider } from '../banner-slider/banner-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Sidebar,
    ProductList,
    Promo,
    FooterComponent,
    BannerSlider
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}

