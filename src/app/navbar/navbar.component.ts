import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  styles: [`
    .nav-button {
      background: transparent;
      cursor: pointer;
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
      text-decoration: none;
    }

    mat-toolbar.mat-navbar {
      background: #8aacde;
      color: #1f57af;
    }
    .active-link {
      background: #1f57af;
      color: #e4eff9;
    }
  `],
  template: `
    <mat-toolbar color="navbar">
      <a class="nav-button" [routerLinkActive]="['active-link']"
        routerLink="/" [routerLinkActiveOptions]="{exact:true}">Etusivu</a>
      <a class="nav-button" [routerLinkActive]="['active-link']"
        routerLink="/hinnasto">Hinnasto</a>
      <a class="nav-button" [routerLinkActive]="['active-link']"
        routerLink="/saapuminen">Saapuminen</a>
    </mat-toolbar>
  `
})
export class NavBar {

}
