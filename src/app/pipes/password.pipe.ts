import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): string {
    if(activar){
      return '*'.repeat(value.length)
    } else {
      return value;
    }
  }

}
