import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [CommonModule, RouterModule]
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(res => {
      this.products = res;
    });
  }

  delete(id: number) {
    if (confirm('Delete product?')) {
      this.productService.delete(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}