import { Component } from '@angular/core';
import { Palvelu, PalvelutService } from './palvelut.service';

@Component({
  selector: 'hinnasto',
  providers: [PalvelutService],
  template: `
    <md-card>
      <md-card-title>Hinnasto</md-card-title>
      <md-list>
        <p *ngFor="let palvelu of palvelut">
          {{palvelu.nimi}}, {{palvelu.kesto}} minuuttia -- {{palvelu.hinta}}€
        </p>
      </md-list>
    </md-card>
  `
})
export class Hinnasto {
  private palvelut: Array<Palvelu>;

  constructor(private service: PalvelutService) {
  }

  public ngOnInit() {
    this.palvelut = this.service.get();
  }

}
