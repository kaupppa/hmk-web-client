import { Component } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'yhteystiedot',
  providers: [InfoService],
  styles: [`
    #avatar {
      border-radius: 0;
    }
  `],
  template: `
    <md-card>
      <md-card-header>
        <img id="avatar" md-card-avatar src="assets/kirjekuori.png">
      </md-card-header>
      <p>{{info.henkiloNimi}}</p>
      <p>Puh. {{info.puh}}</p>
      <p>{{info.katuosoite}}</p>
      <p>{{info.postiosoite}} {{info.kaupunki}}</p>
      <p>Y-tunnus {{info.tunnus}}</p>
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
