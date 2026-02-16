import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  standalone: true,
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductFormComponent implements OnInit {

  form!: FormGroup;
  id: number | null = null;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.checkEditMode();
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      categoryId: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      description: ['']
    });
  }

  private checkEditMode(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      this.isEdit = true;

      this.productService.getById(this.id).subscribe({
        next: (res) => {
          this.form.patchValue(res);
        },
        error: () => {
          alert('Failed to load product');
        }
      });
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.value;

    const request$ = this.isEdit && this.id
      ? this.productService.update(this.id, payload)
      : this.productService.create(payload);

    request$.subscribe({
      next: () => {
        this.router.navigate(['/admin/products']);
      },
      error: () => {
        alert('Save failed');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/products']);
  }
}