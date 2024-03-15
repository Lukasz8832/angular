import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopingCartPageComponent } from './shoping-cart-page.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

const routes: Routes = [
  {
      path: '', 
      component: ShopingCartPageComponent
  },
]

@NgModule({
  declarations: [ShopingCartPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterComponent,
    NavigationComponent
  ],
  exports: [ShopingCartPageComponent]
})
export class ShopingCartPageModule { }
