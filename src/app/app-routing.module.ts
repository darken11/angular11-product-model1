import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {ProductsAddComponent} from './components/products-add/products-add.component';
import {ProductsEditComponent} from './components/products-edit/products-edit.component';

const routes: Routes = [
  { path:"products", component:ProductsComponent},
  {path:"newProduct", component:ProductsAddComponent},
  {path:"editProduct/:id", component:ProductsEditComponent},
  { path:"", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
