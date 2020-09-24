import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import {Custumer} from './shared/Models/customer.model'


@Injectable({
  providedIn: 'root'
})

export class CustumerService {

  compareUser: Array<Custumer> = [];
  public compareSource = new BehaviorSubject<Custumer[]>([]);
  currentCompare = this.compareSource.asObservable();
  constructor() {

    // updateCommentList(result: <Custumer[]>) {
    //   this.currentCompare.next(result)
    // }

  }

  updateList(value){
    this.compareSource.next(value);
  }
}
