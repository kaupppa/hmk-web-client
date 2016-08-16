import { Component } from '@angular/core';
import { OutletContainer } from '../outlet-container';

@Component({
  selector: 'hinnasto',
  directives: [OutletContainer],
  template: `
    <outlet-container>
      <hinnat></hinnat>
      <peruutus></peruutus>
      <ajanvaraus></ajanvaraus>
    </outlet-container>
  `
})
export class Hinnasto {
}
