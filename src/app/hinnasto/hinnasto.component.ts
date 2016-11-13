import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from '../cards/info.service';

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

  constructor(private infoservice: InfoService) {
  }

  ngOnInit() {
    let info = this.infoservice.get();
    window.scrollTo(0, 0);
  }
}
