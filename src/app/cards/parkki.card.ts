import { Component } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'parkki',
  providers: [InfoService],
  styles: [`
    #avatar {
      border-radius: 0;
    }
  `],
  template: `
    <md-card>
      <md-card-header>
        <img id="avatar" md-card-avatar src="assets/auto.png">
      </md-card-header>
      <p>Liikehuoneiston edessä on yksi asiakasparkkipaikka.</p>
      <p>Osoite on {{info.katuosoite}}, {{info.postiosoite}} {{info.kaupunki}}</p>
    </md-card>
  `
})
export class Parkki {
  private info: Info;

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    this.info = this.service.get();
  }
}
