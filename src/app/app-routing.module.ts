import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  { path: 'customers', loadChildren: () => import('./add-customer/add-customer.module').then(m => m.AddCustomerModule) },
  {
    path: 'add_costomer',
    loadChildren: () => import('./add-customer/add-customer.module').then(m => m.AddCustomerModule)},
  { path: 'add_costomer', loadChildren: () => import('./add-customer/add-customer.module').then(m => m.AddCustomerModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
