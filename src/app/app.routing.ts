import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { HomePageComponent } from './home-page/home-page.component'
import { ProductPageComponent } from './product-page/product-page.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomePageComponent},
  { path:'login', component:LoginPageComponent},
  { path:'product', component:ProductPageComponent},
  { path: '**', redirectTo: 'dashboard',   }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
