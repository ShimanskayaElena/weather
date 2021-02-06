import { Injectable } from '@angular/core';
import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudRain,
  faCloudSunRain,
  faCloudMoonRain,
  faPooStorm,
  faSnowflake,
  faSmog
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  private icons: any = {
    '01d': faSun,
    '01n': faMoon,
    '02d': faCloudSun,
    '02n': faCloudMoon,
    '03d': faCloud,
    '03n': faCloud,
    '04d': faCloud,
    '04n': faCloud,
    '09d': faCloudRain,
    '09n': faCloudRain,
    '10d': faCloudSunRain,
    '10n': faCloudMoonRain,
    '11d': faPooStorm,
    '11n': faPooStorm,
    '13d': faSnowflake,
    '13n': faSnowflake,
    '50n': faSmog,
    '50d': faSmog
  };

  constructor() { }

  getIcon( key: string ): any {
    return this.icons[key];
  }
}
