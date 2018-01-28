import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(private meta: Meta, private title: Title, private infoservice: InfoService) {
    this.title.setTitle('Lauttasaari - Hieroja Minna Kauppinen');
    this.meta.updateTag({ name: 'description', content: 'Hyvien kulkuyhteyksien varrella, bussilla, metrolla tai autolla.' +
    ' Yksi asiakasparkkipaikka liikehuoneiston edessä.' });
  }

  public ngOnInit() {
    let info = this.infoservice.get();
    window.scrollTo(0, 0);
  }
}
