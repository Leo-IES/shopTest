import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './components/cart/cart.component'
import {HomeComponent} from './components/home/home.component'
import {ItemDescComponent}from './components/item-desc/item-desc.component'
import {LoginComponent} from './components/login/login.component'
import {SingupComponent} from './components/singup/singup.component'
import { CrudComponent } from './components/crud/crud.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'item-desc', component: ItemDescComponent},
  {path:'login', component: LoginComponent},
  {path:'singup', component: SingupComponent},
  {path:'crud', component: CrudComponent},
  {path: '', pathMatch: 'full', redirectTo:'home'},
    {path: '**', pathMatch: 'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
