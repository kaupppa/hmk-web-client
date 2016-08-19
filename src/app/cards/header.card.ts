import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-header',
  styles: [`
    .app-header-icon-img  {
      width: 40px;
      height: 40px;
      margin: 0 10px 0 0;
    }
    .app-header-container {
      display: flex;
      align-items: center
    }
  `],
  template: `
    <div class="app-header-container">
      <img class="app-header-icon-img" src={{icon}}>
      <b>
        <ng-content></ng-content>
      </b>
    </div>
  `
})
export class CardHeader {
  @Input() icon: any;
}
