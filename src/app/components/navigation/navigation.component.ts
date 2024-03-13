import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {produkt } from '../../services/rest.service';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-navigation',
  standalone: true,
  providers: [ProductListComponent],
  imports: [FormsModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  serviceForm: any;
  nazwaProduktu? : any
  elementRef: any;
  cos?: string
  id: number = 0
  constructor(private http: HttpClient, private apiService: RestService, private router: Router)
  {

  }

  getPost(){
    console.log("sdasd")
    console.log(this.apiService.ProductsList)
      this.apiService.ProductsList.forEach((zmienna : produkt) =>
    {  
      console.log(this.cos)
            if(zmienna.title == this.cos){
              this.router.navigate([`/produkt/${zmienna.id}`])
               console.log(zmienna.title)
            } 
  })
  }
  search(){
    this.nazwaProduktu = document.getElementById('as');
    console.log(this.nazwaProduktu)
  }
  navigateToCart(){
    this.router.navigate([`/koszyk`])
  }
}