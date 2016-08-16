import { Component } from '@angular/core';

@Component({
  selector: 'outlet-container',
  template: `
    <div class="app-outlet">
      <div class="app-outlet-header"></div>
      <div class="app-flex-container">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class OutletContainer {
}
