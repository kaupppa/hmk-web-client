import { Component } from '@angular/core';

@Component({
  selector: 'hinnasto',
  styles: [`
    .hinnasto {
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
    }
  `],
  template: `
    <md-content>
      <hinnasto class="hinnasto"></hinnasto>
      <ajanvaraus></ajanvaraus>
      <peruutus></peruutus>
    </md-content>
  `
})
export class Hinnasto {
}
