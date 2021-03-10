class Coord {
  constructor(public lon: number, public lat: number) {}
}

class WeatherId  {
  constructor(
    public id: number,
    public main: string,
    public description: string,
    public icon: string
  ) {}
}

class Main {
  constructor(
    public temp: number,
    public feels_like: number,
    public temp_min: number,
    public temp_max: number,
    public pressure: number,
    public humidity: number
  ) {}
}

class Wind {
  constructor( public speed: number,  public deg: number) {}
}

class Clouds {
  constructor(public all: number) {}
}

class Sys {
  constructor(
    public country: string,
    public sunrise: number,
    public sunset: number,
    public type?: number,
    public id?: number,
    public message?: number
  ) {}
}

export class Weather {
  constructor(
    public coord: Coord,
    public weather: Array<WeatherId>,
    public base: string,
    public main: Main,
    public visibility: number,
    public wind: Wind,
    public clouds: Clouds,
    public dt: number,
    public sys: Sys,
    public timezone: number,
    public id: number,
    public name: string,
    public cod: number
  ) {}
}


