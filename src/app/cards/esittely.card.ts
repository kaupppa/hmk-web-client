import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'esittely',
  styles: [`
    .app-logo-img  {
      float: right;
      width: 100px;
      height: 100px;
      margin: 0 0 0 10px;
    }
    .app-esittely-text {
      max-width: 600px;
      line-height: 30px;
    }
  `],
  template: `
    <mat-card>
      <mat-card-title>{{info.nimi}}</mat-card-title>
      <div class="app-esittely-text">
        <p>
          <a href="http://www.khl.fi/"><img class="app-logo-img" src={{logo}} alt="http://www.khl.fi"></a>
          Olen valmistunut hierojaksi vuonna 1993 ja olen siitä lähtien toiminut hierojana omalla toiminimellä.
          Teen klassista hierontaa ja intialaista päähierontaa.
          Toimipisteeni sijaitsee Lauttasaaressa keskeisellä paikalla, hyvien kulkuyhteyksien varrella.
        </p>
      </div>
      <p><b>Tervetuloa!</b></p>
    </mat-card>
  `
})
export class Esittely implements OnInit {
  private info: Info;
  private logo = require('assets/khl-logo.png');

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    this.info = this.service.get();
  }

}
