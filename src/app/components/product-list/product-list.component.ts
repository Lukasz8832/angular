import { Component, OnInit, input } from '@angular/core';
import { RestService, produkt } from '../../services/rest.service';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products?: Subscription
  products_list?: Array<produkt>
  link = ""
  idParam?: string|number
  constructor(public apiService: RestService, private http: HttpClient, private router: Router){
  }
  ngOnInit() : any {
    this.products_lista()
    this.refresh()
  }
  navigateTo(id: number){
    this.router.navigate([`/produkt/${id}`])
  }
  products_lista()
  {
    this.products = this.apiService.getProdukt().subscribe({
      next: (response) => {
        if(response.body){
          this.products_list = response.body
          this.apiService.ProductsListAll = this.products_list
        }
        else
        {
          
        }
      },
      error: (error) => {
      }
    })
  }
  addToCart(produkt: produkt){
    this.apiService.addToCart(produkt)
  }
  sumuj(){
    console.log(this.apiService.sumuj())
  }
  refresh(){

  }
  }
