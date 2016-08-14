import { Injectable } from '@angular/core';

export class Coord {
  public lat: number;
  public lon: number;
}

export class Info {
  public nimi: string;
  public henkiloNimi: string;
  public puh: string;
  public katuosoite: string;
  public kaupunki: string;
  public postiosoite: string;
  public tunnus: string;
  public perustettu: number;
  public coord: Coord;
}

@Injectable()
export class InfoService {
  private info: Info = {
    nimi: 'Rekisteröity hieroja Minna Kauppinen',
    henkiloNimi: 'Minna Kauppinen (ent. Paaso)',
    puh: '050 547 7811',
    katuosoite: 'Lauttasaarentie 37',
    kaupunki: 'Helsinki',
    postiosoite: '00200',
    tunnus: '1368155-4',
    perustettu: 1993,
    coord: {
      lat: 60.16081109440265,
      lon: 24.87903892993927
    }
  };

  public get() {
    return this.info;
  }
}


