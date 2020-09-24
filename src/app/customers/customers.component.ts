import { Component, OnInit, } from '@angular/core';

import { CustumerService } from './../../custumer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  editField: string;

  constructor(
    public custumerService: CustumerService,
  )
   { }

  customerList: Array<any> = [
    { id: 1, name: 'Aurelia ', lastname: 'Vega', email: 'Aurelia@gmail.com', country: 'Spain', city: 'Madrid', },
    { id: 2, name: 'Guerra', lastname: 'Cortez', email: 'garera@gmail.com', country: 'USA', city: 'San Francisco', },
    { id: 3, name: 'Guadalupe ', lastname: 'House', email: 'guadalupe@gmail.com', country: 'Germany', city: 'Frankfurt am Main', },
  ];

  remove(id: any): void {
    this.customerList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any): void {
    this.editField = event.target.textContent;
  }

  ngOnInit(): void {

    if(this.custumerService.compareSource.value.length !== 0 ){
      this.customerList.push(this.custumerService.compareSource.value);
    }
  }
}



