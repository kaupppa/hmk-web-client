import { Component, ViewEncapsulation } from '@angular/core';
import { MetaService } from 'ng2-meta';
import { NavBar } from './navbar';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <navbar class="app-navbar"></navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private metaService: MetaService) {}
}

