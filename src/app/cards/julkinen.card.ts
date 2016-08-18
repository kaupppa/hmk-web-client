import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'julkinen',
  providers: [InfoService],
  template: `
    <md-card>
      <md-card-header>
        <img md-card-avatar src={{icon}}>
      </md-card-header>
      <p>
      Katso <a href="{{url}}">reittioppaasta</a> bussi ja metroreitit
      </p>
    </md-card>
  `
})
export class Julkinen implements OnInit {
  private url: string;
  private icon = require('assets/bussi.png');

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    let info = this.service.get();
    let url = 'http://www.reittiopas.fi/?to=' + info.katuosoite + ',' + info.kaupunki;
    this.url = encodeURI(url);
  }

}
