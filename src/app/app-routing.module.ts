import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './components/cart/cart.component'
import {HomeComponent} from './components/home/home.component'
import {ItemDescComponent}from './components/item-desc/item-desc.component'
import {LoginComponent} from './components/login/login.component'

import {SignupComponent} from './components/signup/signup.component'

import {FinderComponent} from './components/finder/finder.component'



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'item-desc', component: ItemDescComponent},
  {path:'login', component: LoginComponent},

  {path:'signup', component: SignupComponent},

  {path:'finder', component: FinderComponent},

  {path: '', pathMatch: 'full', redirectTo:'home'},
    {path: '**', pathMatch: 'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
