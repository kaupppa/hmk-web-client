import { Injectable } from '@angular/core';

export class Palvelu {
  constructor(
    public nimi: string,
    public kesto: string,
    public hinta: number
    ) {
  }
}

@Injectable()
export class PalvelutService {
  private palvelut = [
    new Palvelu('Klassinen hieronta', '30', 34),
    new Palvelu('Klassinen hieronta', '45', 41),
    new Palvelu('Klassinen hieronta', '60', 48),
    new Palvelu('Klassinen hieronta', '75', 56),
    new Palvelu('Klassinen hieronta', '90', 66),
    new Palvelu('Initialainen päähieronta', 'noin 35', 41)
  ];

  public get(): Array<Palvelu> {
    return this.palvelut;
  }
}


