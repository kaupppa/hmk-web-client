import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  styles: [`
    .nav-button {
      background: transparent;
      cursor: pointer;
      cursor: hand;
      outline: none;
      border: none;
      font-size: 14px;
      font-family: Roboto, "Helvetica Neue", sans-serif;
      font-weight: 500;
      color: currentColor;
      text-align: center;
      margin: 0;
      min-width: 88px;
      line-height: 36px;
      padding: 0 16px;
      border-radius: 3px;
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
      <button class="nav-button" [routerLinkActive]="['active-link']"
        routerLink="/" [routerLinkActiveOptions]="{exact:true}">Etusivu</button>
      <button class="nav-button" [routerLinkActive]="['active-link']"
        routerLink="/hinnasto">Hinnasto</button>
      <button class="nav-button" [routerLinkActive]="['active-link']"
        routerLink="/saapuminen">Saapuminen</button>
    </md-toolbar>
  `
})
export class NavBar {

}
