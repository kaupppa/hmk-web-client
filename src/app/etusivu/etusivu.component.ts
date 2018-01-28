import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Info, InfoService } from '../cards/info.service';

@Component({
  selector: 'etusivu',
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

  constructor(private meta: Meta, private title: Title, private infoservice: InfoService) {
    this.title.setTitle('Rekisteröity hieroja Minna Kauppinen (ent. Paaso), Lauttasaari');
    this.meta.updateTag({ name: 'description', content: 'Klassista hierontaa ja intialaista päähierontaa lauttasaaressa, hyvien kulkuyhteyksien varrella.' +
    ' Ajanvaraus numerosta 050 5477 811. Osoite Lauttasaarentie 37, 00200 Helsinki' });
  }

  public ngOnInit() {
    let info = this.infoservice.get();
    window.scrollTo(0, 0);
  }
}
