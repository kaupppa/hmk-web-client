import { Component } from '@angular/core';

@Component({
  selector: 'etusivu',
  template: `
    <md-content>
      <esittely></esittely>
      <aukioloaika></aukioloaika>
      <ajanvaraus></ajanvaraus>
      <khl></khl>
      <yhteystiedot></yhteystiedot>
    </md-content>
  `
})
export class Etusivu {
}
