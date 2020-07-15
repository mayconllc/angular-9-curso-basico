import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost:3000/products'

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(message: string) { 
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: Product) : Observable<Product>{
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

  read() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}