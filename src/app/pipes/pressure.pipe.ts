import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressure',
  pure: true
})
export class PressurePipe implements PipeTransform {

  transform(value: string): number {
    return (Number(value) * 3 / 4);
  }
}
