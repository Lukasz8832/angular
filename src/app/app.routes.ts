import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
    {
        path: '', 
        loadChildren:() => import("./pages/login-page/login-page.module").then(m => m.LoginPageModule), 
        
    },
    {
        path: 'sklep',
        loadChildren:() => import("./pages/home-page/home-page.module").then(m => m.HomePageModule), 
    },
    {
    path: 'produkt/:id',
    loadChildren:() => import("./pages/product-page/product-page.module").then(m => m.ProductPageModule), 
},


];
