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
    new Palvelu('Hieronta', '30', 33),
    new Palvelu('Hieronta', '45', 40),
    new Palvelu('Hieronta', '60', 47),
    new Palvelu('Hieronta', '75', 55),
    new Palvelu('Hieronta', '90', 65),
    new Palvelu('Initialainen päähieronta', 'noin 35', 40)
  ];

  public get(): Array<Palvelu> {
    return this.palvelut;
  }
}


