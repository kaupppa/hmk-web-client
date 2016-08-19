import { Component } from '@angular/core';

@Component({
  selector: 'aukioloaika',
  template: `
    <md-card [style.background]="'#aec4e8'">
      <card-header icon={{icon}}>
        Aukioloajat
      </card-header>
      <p>Avoinna arkisin sopimuksen mukaan</p>
    </md-card>
  `
})
export class Aukioloaika {
  private icon = require('assets/kello.png');
}
