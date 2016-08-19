import { Component } from '@angular/core';

@Component({
  selector: 'parkki',
  template: `
    <md-card>
      <card-header icon={{icon}}>
        Pysäköinti
      </card-header>
      <p>Liikehuoneiston edessä on yksi asiakasparkkipaikka</p>
    </md-card>
  `
})
export class Parkki {
  private icon = require('assets/auto.png');
}
