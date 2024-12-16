import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'apropos',
    loadChildren: () =>
      import('./apropos/apropos.module').then((m) => m.AproposModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'products-category/:id', component: ProductsCategoryComponent },
  { path: 'products-category-qp', component: ProductsCategoryQPComponent },







  // Route pour les URL non définies
  { path: '**', component: NotfoundpageComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
