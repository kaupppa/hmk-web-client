import { Component } from '@angular/core';
import { OutletContainer } from '../outlet-container';

@Component({
  selector: 'etusivu',
  directives: [OutletContainer],
  template: `
    <outlet-container>
      <esittely></esittely>
      <aukioloaika></aukioloaika>
      <ajanvaraus></ajanvaraus>
      <yhteystiedot></yhteystiedot>
    </outlet-container>
  `
})
export class Etusivu {
}
