import { Component } from '@angular/core';

@Component({
  selector: 'aukioloaika',
  template: `
    <mat-card [style.background]="'#aec4e8'">
      <card-header icon={{icon}}>
        Aukioloajat
      </card-header>
      <p>Avoinna arkisin sopimuksen mukaan</p>
    </mat-card>
  `
})
export class Aukioloaika {
  private icon = require('assets/kello.png');
}
