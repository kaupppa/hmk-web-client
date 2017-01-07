import { Component } from '@angular/core';

@Component({
  selector: 'parkki',
  template: `
    <md-card>
      <card-header icon={{icon}}>
        Pysäköinti
      </card-header>
      <p>Liikehuoneiston edessä on yksi asiakasparkkipaikka</p>
      <p>Ajo-ohjeet <a href={{mapUrl}}>Googlen reittihausta.</a></p>
    </md-card>
  `
})
export class Parkki {
  private icon = require('assets/auto.png');
  private mapUrl = 'https://www.google.fi/maps/dir//Lauttasaarentie+37,+00200+Helsinki/@60.1607259,24.8764347,17z/'
  + 'data=!4m16!1m7!3m6!1s0x46920a5d5978f2c3:0x669ffa459aa677c4!2sLauttasaarentie+37,+00200+Helsinki'
  + '!3b1!8m2!3d60.1607232!4d24.8786287!4m7!1m0!1m5!1m1!1s0x46920a5d5978f2c3:0x669ffa459aa677c4!2m2!1d24.8786287!2d60.1607232';
}
