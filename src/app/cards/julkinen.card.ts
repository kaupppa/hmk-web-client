import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'julkinen',
  template: `
    <mat-card>
      <card-header icon={{icon}}>
        Bussi ja metro
      </card-header>
      <p>
        Katso <a href="{{url}}">reittioppaasta</a> linjat ja aikataulut
      </p>
    </mat-card>
  `
})
export class Julkinen implements OnInit {
  private url: string;
  private icon = 'assets/bussi.png';

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    let info = this.service.get();
    let url = 'https://www.reittiopas.fi/?to=' + info.katuosoite + ',' + info.kaupunki;
    this.url = encodeURI(url);
  }

}
