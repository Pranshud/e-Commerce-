import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ProductService } from "../services/product.service";

@Component({
  standalone: true,
  template: `
    <h3>Bulk Upload</h3>
    <input type="file" (change)="upload($event)">
  `,
  imports: [CommonModule]
})
export class BulkUploadComponent {

  constructor(private productService: ProductService) {}

  upload(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.productService.bulkUpload(formData).subscribe(() => {
      alert('Upload successful');
    });
  }
}