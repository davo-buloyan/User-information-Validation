import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
import { FormatPipe } from './toName.pipe';

import { AddCustomerRoutingModule } from './add-customer-routing.module';
import { AddCustomerComponent } from './add-customer.component';


@NgModule({
  declarations: [AddCustomerComponent, FormatPipe],
  imports: [
    CommonModule,
    AddCustomerRoutingModule,
    ReactiveFormsModule,
    MatSelectCountryModule,
    HttpClientModule,

  ]
})
export class AddCustomerModule { }
