import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from '../cards/info.service';
import { Title } from '@angular/platform-browser';

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

  constructor(private infoservice: InfoService, private titleService: Title) {
  }

  ngOnInit() {
    let info = this.infoservice.get();
    let parts = this.titleService.getTitle().split(' - ', 2);
    this.titleService.setTitle('Hinnasto - ' + parts[parts.length - 1]);
    window.scrollTo(0, 0);
  }
}
