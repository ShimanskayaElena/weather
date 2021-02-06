import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
  pure: true
})
export class RoundPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }
}
