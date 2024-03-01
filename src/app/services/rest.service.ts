import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface produkt {
  id: number,
  acronym:string,
  name: string,
  deliveryDays: string,
  deliveryDaysRmgs: string,
  county: string,
  city: string,
  bip: string,
  idProducer: boolean,
  archived: boolean,
  longitude: number,
  latitude: number
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { 
    
  }
  link = "https://fakestoreapi.com"
  getProdukt(): Observable<HttpResponse<Array<produkt>>>{
    return this.http.get<Array<produkt>>(this.link,
    {
      observe: 'response',
      responseType: 'json'
    })
  }
  }
  