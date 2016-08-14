import { Component } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'esittely',
  providers: [InfoService],
  template: `
    <md-card>
      <md-card-title>{{info.nimi}}</md-card-title>
      <md-card-content>
        <i>Klassista hiertontaa jo vuodesta {{info.perustettu}} lähtien.</i>
      </md-card-content>
    </md-card>
  `
})
export class Esittely {
  private info: Info;

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    this.info = this.service.get();
  }

}
