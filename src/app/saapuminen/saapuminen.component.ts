import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from '../cards/info.service';

@Component({
  selector: 'saapuminen',
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
export class Saapuminen implements OnInit {

  constructor(private infoservice: InfoService) {
  }

  public ngOnInit() {
    let info = this.infoservice.get();
    window.scrollTo(0, 0);
  }
}
