import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-header',
  styles: [`
    .app-header-container {
      display: flex;
      align-items: center;
      text-align: center;
    }
    .app-header-title {
      height: 100%;
      text-align: center;
    }
    
  `],
  template: `
    <mat-card-header class="app-header-container">
      <img mat-card-avatar src="{{icon}}">
      <mat-card-title  ><ng-content></ng-content></mat-card-title>
    </mat-card-header>
  `
})
export class CardHeader {
  @Input() icon: any;
}
