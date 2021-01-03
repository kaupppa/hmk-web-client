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
    new Palvelu('Klassinen hieronta', '30', 35),
    new Palvelu('Klassinen hieronta', '45', 43),
    new Palvelu('Klassinen hieronta', '60', 50),
    new Palvelu('Klassinen hieronta', '75', 58),
    new Palvelu('Klassinen hieronta', '90', 68),
    new Palvelu('Initialainen päähieronta', 'noin 35', 43)
  ];

  public get(): Array<Palvelu> {
    return this.palvelut;
  }
}


