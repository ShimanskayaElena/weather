import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-city',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  value: any;

  constructor( private iconsService: IconsService ) {}

  ngOnInit(): void { }

  getIcon(key: string): any {
    return this.iconsService.getIcon(key);
  }
}
