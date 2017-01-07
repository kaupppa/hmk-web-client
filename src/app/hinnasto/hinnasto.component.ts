import { Component, OnInit } from '@angular/core';
import { MetaService } from 'ng2-meta';
import { Palvelu, PalvelutService } from '../cards/palvelut.service';

@Component({
  selector: 'hinnasto',
  template: `
    <outlet-container>
      <hinnat></hinnat>
      <peruutus></peruutus>
      <ajanvaraus></ajanvaraus>
    </outlet-container>
  `
})
export class Hinnasto implements OnInit {

  constructor(private metaService: MetaService, private palvelutService: PalvelutService) {
  }

  ngOnInit() {
    let palvelut = this.palvelutService.get();
    let description = 'Hierontahinnat alkaen ' + palvelut[0].hinta + '€ - ' + palvelut[0].kesto + 'min.'
    + ' Ajanvaraus numerosta 050 5477 811.';
    this.metaService.setTag('description', description);
    window.scrollTo(0, 0);
  }
}
