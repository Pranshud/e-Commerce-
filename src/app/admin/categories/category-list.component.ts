import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CategoryService } from "../services/category.service";

@Component({
  standalone: true,
  selector: 'app-category-list',
  template: `
    <h3>Categories</h3>
    <input [(ngModel)]="name">
    <button (click)="save()">Add</button>

    <ul>
      <li *ngFor="let c of categories">{{c.name}}</li>
    </ul>
  `,
  imports: [CommonModule, FormsModule]
})
export class CategoryListComponent implements OnInit {

  categories: any[] = [];
  name = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.categoryService.getAll().subscribe(res => this.categories = res);
  }

  save() {
    this.categoryService.create({ name: this.name }).subscribe(() => {
      this.name = '';
      this.load();
    });
  }
}