import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProductService {

  private base = '/api/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.base);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.base}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.base, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.base}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.base}/${id}`);
  }

  updateStock(id: number, stock: number) {
    return this.http.patch(`${this.base}/${id}/stock`, { stock });
  }

  bulkUpload(data: FormData) {
    return this.http.post(`${this.base}/bulk-upload`, data);
  }
}