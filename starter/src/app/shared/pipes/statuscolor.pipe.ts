import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'statusColor',
  pure: true
})

export class StatusColorPipe implements PipeTransform {
  transform(value: boolean):string {
    switch(value) {
      case false:
        return 'green';
      case true:
        return 'red';
      default:
        return 'blue';
    }
  }
}
