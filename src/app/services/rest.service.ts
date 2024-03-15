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
  Cena: number = 0
  idParam!: number
  ProductsList: Array<produkt> = []
  ProductsListAll: Array<produkt> = []
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
  addToCart(product : produkt)
  {
    this.ProductsList.push(product)
    console.log(this.ProductsList)
   }
   sumuj(){
    this.Cena = 0  
    this.ProductsList!.forEach((zmienna : produkt) =>
    {
      this.Cena = this.Cena + zmienna.price

  })
  this.Cena = Number(this.Cena.toFixed(2))
  return this.Cena
}
  }
  