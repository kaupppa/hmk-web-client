import { Component } from '@angular/core';

@Component({
  selector: 'parkki',
  template: `
    <md-card>
      <md-card-header>
        <img md-card-avatar src={{icon}}>
      </md-card-header>
      <p>Liikehuoneiston edessä on yksi asiakasparkkipaikka</p>
    </md-card>
  `
})
export class Parkki {
  private icon = require('assets/auto.png');
}
