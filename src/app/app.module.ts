import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemDescComponent } from './components/item-desc/item-desc.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import { FinderComponent } from './components/finder/finder.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ItemComponent } from './components/item/item.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';   
import {InputTextModule} from 'primeng/inputtext';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ItemDescComponent,
    NavbarComponent,
    HomeComponent,
    CrudComponent,
    FinderComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    InputTextModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
