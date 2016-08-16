import { Component } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'julkinen',
  providers: [InfoService],
  template: `
    <md-card>
      <md-card-header>
        <img md-card-avatar src="assets/bussi.png">
      </md-card-header>
      <p>
      Katso <a href="{{url}}">reittioppaasta</a> bussi ja metroreitit
      </p>
    </md-card>
  `
})
export class Julkinen {
  private url: string;

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    let info = this.service.get();
    let url = 'http://www.reittiopas.fi/?to=' + info.katuosoite + ',' + info.kaupunki;
    this.url = encodeURI(url);
  }

}
