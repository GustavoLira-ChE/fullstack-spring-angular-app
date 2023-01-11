import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListByCategoryComponent } from './components/product-list-by-category/product-list-by-category.component';

const routes: Routes = [
  {path:"", component: ProductListComponent},
  {path:"category/:id", component: ProductListByCategoryComponent},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
