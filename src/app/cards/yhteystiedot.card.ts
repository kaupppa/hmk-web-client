import { Component } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'yhteystiedot',
  providers: [InfoService],
  styles: [`
    .app-yhteystieto {
      font-size: 14px;
      padding: 0;
      margin: 2px;
    }
  `],
  template: `
    <md-card>
      <md-card-header>
        <img md-card-avatar src="assets/kirjekuori.png">
      </md-card-header>
      <p class="app-yhteystieto">{{info.henkiloNimi}}</p>
      <p class="app-yhteystieto">Puh. {{info.puh}}</p>
      <p class="app-yhteystieto">{{info.katuosoite}}</p>
      <p class="app-yhteystieto">{{info.postiosoite}} {{info.kaupunki}}</p>
      <p class="app-yhteystieto">Y-tunnus {{info.tunnus}}</p>
    </md-card>
  `
})
export class Yhteystiedot {
  private info: Info;

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    this.info = this.service.get();
  }

}
