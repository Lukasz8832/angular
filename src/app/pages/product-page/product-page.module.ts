import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';
    
const routes: Routes = [
  {
      path: '', 
      component: ProductPageComponent
  },
]

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavigationComponent,
    FooterComponent
  ],
  exports: [ProductPageComponent]
})
export class ProductPageModule { }
