import { Component } from '@angular/core';

@Component({
  selector: 'saapuminen',
  styles: [`
    .kartta {
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
    }
  `],
  template: `
    <md-content>
      <julkinen></julkinen>
      <parkki></parkki>
      <kartta class="kartta"></kartta>
      <yhteystiedot></yhteystiedot>
    </md-content>
  `
})
export class Saapuminen {

}
