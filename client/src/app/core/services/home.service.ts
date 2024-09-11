import { inject, Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Product } from '../../shared/models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit{
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);

  typesHomePage: Product[] | undefined = [];
  
  ngOnInit(): void {
    this.getTypesHomePage();
  }

  getTypesHomePage() {
    return this.http.get<Product[]>(this.baseUrl + 'products/typesHomePage').subscribe({
      next: response => this.typesHomePage = response
    });
  }
}
