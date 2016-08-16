import { Component } from '@angular/core';

@Component({
  selector: 'parkki',
  template: `
    <md-card>
      <md-card-header>
        <img md-card-avatar src="assets/auto.png">
      </md-card-header>
      <p>Liikehuoneiston edessä on yksi asiakasparkkipaikka</p>
    </md-card>
  `
})
export class Parkki {
}
