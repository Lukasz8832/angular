import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation.component';

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
    RouterModule.forChild(routes)
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
