import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'list-product', pathMatch: 'full'
  },
  {
    path: 'list-product',
    loadChildren: () => import('../app/views/list-product/list-product.module').then(m => m.ListProductModule)      
  },
  {
    path: 'register-product',
    loadChildren: () => import('../app/views/register-product/register-product.module').then(m => m.RegisterProductModule)      
  },
  {
    path: 'detail-product',
    loadChildren: () => import('../app/views/detail-product/detail-product.module').then(m => m.DetailProductModule)      
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
