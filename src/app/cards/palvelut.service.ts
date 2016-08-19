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
    new Palvelu('Klassinen hieronta', '30', 33),
    new Palvelu('Klassinen hieronta', '45', 40),
    new Palvelu('Klassinen hieronta', '60', 47),
    new Palvelu('Klassinen hieronta', '75', 55),
    new Palvelu('Klassinen hieronta', '90', 65),
    new Palvelu('Initialainen päähieronta', 'noin 35', 40)
  ];

  public get(): Array<Palvelu> {
    return this.palvelut;
  }
}


