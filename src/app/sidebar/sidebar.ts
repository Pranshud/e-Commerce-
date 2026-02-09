import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type FilterKey =
  | 'gender'
  | 'brands'
  | 'style'
  | 'price'
  | 'season'
  | 'sale';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
  open: Record<FilterKey, boolean> = {
    gender: false,
    brands: false,
    style: false,
    price: false,
    season: false,
    sale: false
  };

  toggle(key: FilterKey): void {
    this.open[key] = !this.open[key];
  }

  reset(): void {
    (Object.keys(this.open) as FilterKey[]).forEach(
      key => (this.open[key] = false)
    );
  }
}
