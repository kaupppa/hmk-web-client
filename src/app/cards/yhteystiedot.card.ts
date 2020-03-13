import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'yhteystiedot',
  styles: [`
    .app-yhteystieto {
      font-size: 14px;
      padding: 0;
      margin: 2px;
    }
  `],
  template: `
    <mat-card>
      <card-header icon={{icon}}>
        Yhteystiedot
      </card-header>
      <p class="app-yhteystieto">{{info.henkiloNimi}}</p>
      <p class="app-yhteystieto">Puh. {{info.puh}}</p>
      <p class="app-yhteystieto">{{info.katuosoite}}</p>
      <p class="app-yhteystieto">{{info.postiosoite}} {{info.kaupunki}}</p>
      <p class="app-yhteystieto">Y-tunnus {{info.tunnus}}</p>
    </mat-card>
  `
})
export class Yhteystiedot implements OnInit {
  private info: Info;
  private icon = 'assets/kirjekuori.png';

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    this.info = this.service.get();
  }

}
