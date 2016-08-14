import { Component } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'ajanvaraus',
  providers: [InfoService],
  styles: [`
    #avatar {
      border-radius: 0;
    }
  `],
  template: `
    <md-card [style.background]="'#bfd1ee'" >
      <md-card-header>
        <img id="avatar" md-card-avatar src="assets/puhelin.png">
      </md-card-header>
      <p>Ajanvaraus numerosta {{info.puh}}</p>
    </md-card>
  `
})
export class Ajanvaraus {
  private info: Info;

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    this.info = this.service.get();
  }

}
