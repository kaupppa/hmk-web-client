import { Component } from '@angular/core';

@Component({
  selector: 'parkki',
  styles: [`
    #avatar {
      border-radius: 0;
    }
  `],
  template: `
    <md-card>
      <md-card-header>
        <img id="avatar" md-card-avatar src="assets/auto.png">
      </md-card-header>
      <p>Liikehuoneiston edessä on yksi asiakasparkkipaikka.</p>
    </md-card>
  `
})
export class Parkki {

}
