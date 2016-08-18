import { Component, OnInit } from '@angular/core';
import { OutletContainer } from '../outlet-container';
import { SeoService } from '../common/';
import { Info, InfoService } from '../cards/info.service';

@Component({
  selector: 'hinnasto',
  directives: [OutletContainer],
  providers: [SeoService, InfoService],
  template: `
    <outlet-container>
      <hinnat></hinnat>
      <peruutus></peruutus>
      <ajanvaraus></ajanvaraus>
    </outlet-container>
  `
})
export class Hinnasto implements OnInit {

  constructor(private seoservice: SeoService, private infoservice: InfoService) {
  }

  ngOnInit() {
    let info = this.infoservice.get();
    try {
      this.seoservice.setTitle('Hinnasto - Rekisteröity hieroja Minna Kauppinen (ent. Paaso)');
      this.seoservice.setMetaDescription(
        'Klassista hierontaa ja intialaista päähierontaa lauttasaaressa. ' +
        'Ajanvaraus numerosta ' + info.puh
      );
      window.scrollTo(0, 0);
    } catch (err) {
      ;
    }
  }
}
