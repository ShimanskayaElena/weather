import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wind',
  pure: true
})
export class WindPipe implements PipeTransform {

  transform(value: number): string  {
    if ((value > 338 && value <= 360) || (value > 0 && value < 22)) { return 'C'; }
    if (value === 22) { return 'C,CB'; }
    if (value > 22 && value < 68) { return 'CB'; }
    if (value === 68) { return 'B,CB'; }
    if (value > 68 && value < 112) { return 'B'; }
    if (value === 112) { return 'В,ЮВ'; }
    if (value > 112 && value < 158) { return 'ЮВ'; }
    if (value === 158) { return 'Ю,ЮВ'; }
    if (value > 158 && value < 202) { return 'Ю'; }
    if (value === 202) { return 'Ю,ЮЗ'; }
    if (value > 202 && value < 248) { return 'ЮЗ'; }
    if (value === 248) { return 'З,ЮЗ'; }
    if (value > 248 && value < 292) { return 'З'; }
    if (value === 292) { return 'З,СЗ'; }
    if (value > 292 && value < 338) { return 'СЗ'; }
    if (value === 338) { return 'С,СЗ'; }
    return '';
  }

}
