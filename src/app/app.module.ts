import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedService } from './services/shared-service';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardService } from './services/dashboard-service';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { KeyFilterPipe } from './pipe/keyfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    HeaderPageComponent,
    LoginPageComponent,
    ProductPageComponent,
    FooterPageComponent,
    SideMenuComponent,
    FilterMenuComponent,
    PlaceholderComponent,
    KeyFilterPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [SharedService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
