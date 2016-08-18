import { Component, OnInit } from '@angular/core';
import { OutletContainer } from '../outlet-container';
import { SeoService } from '../common/';
import { Info, InfoService } from '../cards/info.service';

@Component({
  selector: 'etusivu',
  directives: [OutletContainer],
  providers: [SeoService, InfoService],
  template: `
    <outlet-container>
      <esittely></esittely>
      <aukioloaika></aukioloaika>
      <ajanvaraus></ajanvaraus>
      <yhteystiedot></yhteystiedot>
    </outlet-container>
  `
})
export class Etusivu implements OnInit {

  constructor(private seoservice: SeoService, private infoservice: InfoService) {
  }

  public ngOnInit() {
    let info = this.infoservice.get();
    try {
      this.seoservice.setTitle('Rekisteröity hieroja Minna Kauppinen (ent. Paaso)');
      this.seoservice.setMetaDescription(
        'Klassista hierontaa ja intialaista päähierontaa lauttasaaressa, hyvien kulkuyhteyksien varrella. ' +
        'Ajanvaraus numerosta ' + info.puh
      );
      window.scrollTo(0, 0);
    } catch (err) {
      ;
    }
  }
}
