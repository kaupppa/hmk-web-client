import { Component } from '@angular/core';

@Component({
  selector: 'peruutus',
  styles: [`
  `],
  template: `
    <md-card [style.background]="'#aec4e8'">
      <md-card-title>Esteen sattuessa muistathan perua aikasi</md-card-title>
      <p>Perumattomasta ajasta veloitetaan normaalihinta.</p>
    </md-card>
  `
})
export class Peruutus {
}
