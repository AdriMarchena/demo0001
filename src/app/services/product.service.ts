import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apis.product.list);
  }

  addProduct(body: Product): Observable<Product> {
    return this.http.post<Product>(environment.apis.product.create, body);
  }

  editProduct(body: Product, id: string): Observable<any> {
    let url = environment.apis.product.update;
    url = url.replace('{id}', id);
    return this.http.put<any>(url, body);
  }

  verProduct(id: string): Observable<Product> {
    let url = environment.apis.product.update;
    url = url.replace('{id}', id);
    return this.http.get<Product>(url);
  }
}
