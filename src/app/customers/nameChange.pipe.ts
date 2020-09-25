import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toName'})
export class NameChange implements PipeTransform {
  transform(arr: any): string {
    let res = arr.split(",");
    return res[1]
  }
}
