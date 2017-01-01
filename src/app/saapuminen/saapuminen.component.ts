import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from '../cards/info.service';
import { Title } from '@angular/platform-browser';

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

  constructor(private infoservice: InfoService, private titleService: Title) {
  }

  public ngOnInit() {
    let info = this.infoservice.get();
    let parts = this.titleService.getTitle().split(' - ', 2);
    this.titleService.setTitle('Saapuminen - ' + parts[parts.length - 1]);
    window.scrollTo(0, 0);
  }
}
