import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http'

 const routes: Routes = [
  {
      path: '', 
      component: HomePageComponent
  },
]

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NavigationComponent,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
