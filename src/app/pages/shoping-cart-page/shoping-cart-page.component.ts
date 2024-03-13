import { Component, OnInit, numberAttribute } from '@angular/core';
import { RestService, produkt } from '../../services/rest.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shoping-cart-page',
  standalone: false,
  providers: [ProductListComponent],
  templateUrl: './shoping-cart-page.component.html',
  styleUrl: './shoping-cart-page.component.css'
})
export class ShopingCartPageComponent implements OnInit {
  KoszykZawartosc?: Array<produkt>
  Cena: number = 0
  index : any = 0
  constructor(private apiService : RestService, private ok: ProductListComponent  ){
    this.KoszykZawartosc = apiService.ProductsList
  }
  ngOnInit(): void {
    console.log(this.apiService.ProductsList)
    this.sumuj()
  }
  sumuj(){
    this.Cena = 0  
    this.KoszykZawartosc!.forEach((zmienna : produkt) =>
    {
      this.Cena = this.Cena + zmienna.price
      console.log(this.Cena)
  })}
  usun(nazwa: produkt){
    this.index = this.KoszykZawartosc?.indexOf(nazwa)    
    this.KoszykZawartosc?.splice(this.index, 1)
    console.log(this.index)
    this.sumuj()
  
  }
}
