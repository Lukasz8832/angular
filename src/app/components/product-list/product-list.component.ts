import { Component, OnInit } from '@angular/core';
import { RestService, produkt } from '../../services/rest.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products?: Subscription
  //products_lista: Array<any> = [];
  products_list?: Array<produkt>
  constructor(private apiService: RestService){
  }
  ngOnInit() : any {
    this.products_lista()
  }
  products_lista()
  {
    this.products = this.apiService.getProdukt().subscribe({
      next: (response) => {
        if(response.body){
          this.products_list = response.body
        }
        else
        {
          
        }
      },
      error: (error) => {
      }
    })
  }
}
