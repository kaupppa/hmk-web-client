import { Component } from '@angular/core';
import { OutletContainer } from '../outlet-container';

@Component({
  selector: 'saapuminen',
  directives: [OutletContainer],
  styles: [`
    .app-saapuminen-kartta {
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
    }
  `],
  template: `
    <outlet-container>
      <julkinen></julkinen>
      <parkki></parkki>
      <kartta class="app-saapuminen-kartta"></kartta>
    </outlet-container>
  `
})
export class Saapuminen {

  ngOnInit() {
    try {
      window.scrollTo(0, 0);
    } catch (err) {
      ;
    }
  }
}
