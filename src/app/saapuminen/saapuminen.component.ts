import { Component, OnInit } from '@angular/core';
import { OutletContainer } from '../outlet-container';
import { SeoService } from '../common/';
import { Info, InfoService } from '../cards/info.service';

@Component({
  selector: 'saapuminen',
  directives: [OutletContainer],
  providers: [SeoService, InfoService],
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

  constructor(private seoservice: SeoService, private infoservice: InfoService) {
  }

  public ngOnInit() {
    let info = this.infoservice.get();
    try {
      this.seoservice.setTitle('Saapuminen - Rekisteröity hieroja Minna Kauppinen (ent. Paaso)');
      this.seoservice.setMetaDescription(
        'Rekisteröity hieroja Minna Kauppinen, ' +
        info.katuosoite + ', ' + info.postiosoite + ' ' + info.kaupunki
        );
      window.scrollTo(0, 0);
    } catch (err) {
      ;
    }
  }
}
