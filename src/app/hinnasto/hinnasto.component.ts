import { Component } from '@angular/core';

@Component({
  selector: 'hinnasto',
  template: `
    <md-content>
      <hinnasto></hinnasto>
      <ajanvaraus></ajanvaraus>
      <peruutus></peruutus>
    </md-content>
  `
})
export class Hinnasto {
}
