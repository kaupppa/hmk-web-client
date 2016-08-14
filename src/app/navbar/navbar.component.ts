import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  styles: [`
    .fill{
      flex: 1 1 auto;
    }
    md-toolbar.md-navbar {
      background: #8aacde;
      color: #1f57af;
    }
    .active-link {
      background: #1f57af;
      color: #e4eff9;
    }
  `],
  template: `
    <md-toolbar color="navbar">
      <a md-button [routerLinkActive]="['active-link']" routerLink="/"
        [routerLinkActiveOptions]="{exact:true}">Etusivu</a>
      <a md-button [routerLinkActive]="['active-link']" routerLink="/hinnasto">Hinnasto</a>
      <a md-button [routerLinkActive]="['active-link']" routerLink="/saapuminen">Saapuminen</a>
    </md-toolbar>
  `
})
export class NavBar {

}
