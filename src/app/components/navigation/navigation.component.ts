import { ChangeDetectorRef, Component, NgModule, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {produkt } from '../../services/rest.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  providers: [ProductListComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  serviceForm: any;
  nazwaProduktu? : any
  elementRef: any;
  cos?: string
  id: number = 0
  Cena?: number
  constructor(private ref: ChangeDetectorRef, private http: HttpClient, private apiService: RestService, private router: Router)
  {
    setInterval(() => {
      this.refresh()
     }, 20);
  }
  ngOnInit(): void {
    console.log()
  }
  navigateToCart(){
    this.router.navigate([`/koszyk`])
  }
  wyszukaj(){
    console.log(this.cos)
    console.log(this.apiService.ProductsListAll)
    this.apiService.ProductsListAll!.forEach((zmienna : produkt) =>
    {
      if(this.cos?.trim() == zmienna.title.trim())
      {
       this.apiService.id = zmienna.id 
        this.router.navigate([`/produkt/${zmienna.id}`]) 
        console.log(zmienna.id)
      }
  })
}
  refresh()
  {
    this.Cena = this.apiService.Cena
     if (this.Cena != 0)
      {
         document.getElementById("suma")!.style.visibility = "visible"
      }
      else
      {
        document.getElementById("suma")!.style.visibility = "hidden"
      }
    }

    navigateToHome(){
    this.router.navigate([`/sklep`])
  }
   }
