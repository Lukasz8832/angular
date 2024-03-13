import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface produkt {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  idParam!: number
  ProductsList: Array<produkt> = []
  constructor(private http: HttpClient) { 
  }
  link = "https://fakestoreapi.com"
  getProdukt(): Observable<HttpResponse<Array<produkt>>>{
    return this.http.get<Array<produkt>>(this.link + "/products/",
    {
      observe: 'response',
      responseType: 'json'
    })
  }
  getProduktById(id: number): Observable<HttpResponse<produkt>>{
    return this.http.get<produkt>(this.link + `/products/${id}`,
    {
      observe: 'response',
      responseType: 'json'
    })
  }
  }
  