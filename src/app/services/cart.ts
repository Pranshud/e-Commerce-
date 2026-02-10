import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Cart {

  private items: any[] = [];

  private items$Source = new BehaviorSubject<any[]>([]);
  items$ = this.items$Source.asObservable();

  /** 
   * Existing method – SAFE
   */
  add(product: any) {
    const found = this.items.find(i => i.id === product.id);

    if (found) {
      found.qty = (found.qty || 1) + 1;
    } else {
      this.items.push({ ...product, qty: 1 });
    }

    this.emit();
  }

  /**
   * Existing method – SAFE
   */
  getItems() {
    return [...this.items];
  }

  /** NEW */
  updateQty(id: number, change: number) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {
      this.remove(id);
      return;
    }

    this.emit();
  }

  /** NEW */
  remove(id: number) {
    this.items = this.items.filter(i => i.id !== id);
    this.emit();
  }

  /** NEW */
  saveForLater(item: any) {
    this.remove(item.id);
    console.log('Saved for later:', item);
  }

  /** OPTIONAL */
  clear() {
    this.items = [];
    this.emit();
  }

  /** INTERNAL */
  private emit() {
    this.items$Source.next([...this.items]);
  }
}
