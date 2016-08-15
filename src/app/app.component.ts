import { Component, ViewEncapsulation } from '@angular/core';
import { NavBar } from './navbar';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [ NavBar],
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <div class="app-content">
      <navbar></navbar>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

}

