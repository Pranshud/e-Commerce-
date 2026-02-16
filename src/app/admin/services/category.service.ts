import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = '/api/categories';

  constructor(private http: HttpClient) {}

  /** 🔹 Get all categories */
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  /** 🔹 Get category by id */
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  /** 🔹 Create category */
  create(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  /** 🔹 Update category */
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  /** 🔹 Delete category */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /** 🔹 Status enable / disable (optional but realistic) */
  changeStatus(id: number, active: boolean): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/${id}/status`, { active });
  }
}