import { Component, OnInit } from '@angular/core';
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

  constructor(private infoservice: InfoService) {
  }

  public ngOnInit() {
    let info = this.infoservice.get();
    window.scrollTo(0, 0);
  }
}
