import { Component, OnInit } from '@angular/core';
import { RestService, produkt} from '../../services/rest.service';
import { routes } from '../../app.routes';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  standalone: false,
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  constructor(private apiService: RestService, private route:  ActivatedRoute, private http: HttpClient){
  }
  idParam!: number

  link = "http://localhost:4200"
  produkt?: produkt
  products?: Subscription

  checkUrl(){
    this.route.paramMap.subscribe(params => 
      {
        this.idParam = Number(params.get('id')!)
    });
  }
  wezProdukt(){
    this.products = this.apiService.getProduktById(this.idParam).subscribe({
    next: (response) => {
      if(response.body){
        this.produkt = response.body
        console.log("Trst")
         console.log(this.produkt)
      }
    },
    error: (error) =>
    {
      console.log(error)
    }
    })
  };
  ngOnInit(): void {
    this.checkUrl()
    this.wezProdukt()
  }
  addToCart(produkt: produkt)
  {
    this.apiService.addToCart(produkt)
  }
  sumuj(){
    console.log(this.apiService.sumuj())
  }
}
