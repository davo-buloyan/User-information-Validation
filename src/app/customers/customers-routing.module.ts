import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { CustomersComponent } from './customers.component';


const routes: Routes = [{ path: '', component: CustomersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
