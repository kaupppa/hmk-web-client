import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'ajanvaraus',
  template: `
    <md-card [style.background]="'#aec4e8'">
      <card-header icon={{icon}}>
        Ajanvaraus
      </card-header>
      <p>Ajanvaraus numerosta {{info.puh}}</p>
    </md-card>
  `
})
export class Ajanvaraus implements OnInit {
  private info: Info;
  private icon = require('assets/puhelin.png');

  constructor(private service: InfoService) {

  }

  public ngOnInit() {
    this.info = this.service.get();
  }

}
