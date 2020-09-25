import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toName'})
export class FormatPipe implements PipeTransform {
  transform(id: number, arr: any): string {
    let name: string = '';
      name = arr.name;
    return name;
  }
}
