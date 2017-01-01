import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from '../cards/info.service';
import { Title } from '@angular/platform-browser';

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

  constructor(private infoservice: InfoService, private titleService: Title) {
  }

  public ngOnInit() {
    let info = this.infoservice.get();
    let parts = this.titleService.getTitle().split(' - ', 2);
    this.titleService.setTitle(parts[parts.length - 1]);
    window.scrollTo(0, 0);
  }
}
