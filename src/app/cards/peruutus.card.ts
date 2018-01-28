import { Component } from '@angular/core';

@Component({
  selector: 'peruutus',
  template: `
    <mat-card>
      <card-header icon={{icon}}>
        Esteen sattuessa muistathan perua aikasi
      </card-header>
      <p>Perumattomasta ajasta veloitetaan normaalihinta</p>
    </mat-card>
  `
})
export class Peruutus {
  private icon = require('assets/varoitus.png');
}
