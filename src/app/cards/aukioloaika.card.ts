import { Component } from '@angular/core';

@Component({
  selector: 'aukioloaika',
  template: `
    <md-card [style.background]="'#aec4e8'">
      <md-card-header>
        <img md-card-avatar src="assets/kello.png">
      </md-card-header>
      <p>Avoinna arkisin sopimuksen mukaan</p>
    </md-card>
  `
})
export class Aukioloaika {
}
