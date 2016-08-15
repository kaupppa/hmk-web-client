import { Component } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'esittely',
  providers: [InfoService],
  styles: [`
    .logo-img  {
      float: right;
      width: 100px;
      height: 100px;
      margin: 0 0 0 10px;
    }
    .esittely-text {
      max-width: 600px;
      line-height: 30px;
    }
  `],
  template: `
    <md-card>
      <md-card-title>{{info.nimi}}</md-card-title>
      <div class="esittely-text">
        <p>
        <a href="http://www.khl.fi/"><img class="logo-img" src="assets/khl-logo.png" alt="http://www.khl.fi"></a>
        Olen valmistunut hierojaksi vuonna 1993 ja olen siitä lähtien toiminut hierojana omalla toiminimellä.
        Teen klassista hierontaa ja intialaista päähierontaa.
        Toimipisteeni sijaitsee Lauttasaaressa keskeisellä paikalla, hyvien kulkuyhteyksien varrella.

        </p>
        </div>
        <p><b>Tervetuloa!</b></p>
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
