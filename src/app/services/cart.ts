import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Cart {

  private items: any[] = [];
  private items$Source = new BehaviorSubject<any[]>([]);

  items$ = this.items$Source.asObservable();

  add(product: any) {
    this.items.push(product);
    this.items$Source.next(this.items);
  }

  getItems() {
    return this.items;
  }
}
