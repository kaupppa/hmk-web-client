import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'ajanvaraus',
  providers: [InfoService],
  template: `
    <md-card [style.background]="'#aec4e8'">
      <md-card-header>
        <img md-card-avatar src={{icon}}>
      </md-card-header>
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
