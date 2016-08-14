import { Component } from '@angular/core';

@Component({
  selector: 'aukioloaika',
  styles: [`
    #avatar {
      border-radius: 0;
    }
  `],
  template: `
    <md-card [style.background]="'#ccd9f0'">
      <md-card-header>
        <img id="avatar" md-card-avatar src="assets/kello.png">
      </md-card-header>
      <p>Avoinna arkisin sopimuksen mukaan.</p>
    </md-card>
  `
})
export class Aukioloaika {
}
