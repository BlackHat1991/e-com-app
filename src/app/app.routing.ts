import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { HomePageComponent } from './home-page/home-page.component'



const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: HomePageComponent},
  { path:'login', component:LoginPageComponent},
  { path: '**', redirectTo: 'login',   }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
