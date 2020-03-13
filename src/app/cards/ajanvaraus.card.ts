import { Component, OnInit } from '@angular/core';
import { Info, InfoService } from './info.service';

@Component({
  selector: 'ajanvaraus',
  template: `
    <mat-card [style.background]="'#aec4e8'">
      <card-header icon={{icon}}>
        Ajanvaraus
      </card-header>
      <p>Ajanvaraus numerosta {{info.puh}}</p>
    </mat-card>
  `
})
export class Ajanvaraus implements OnInit {
  private info: Info;
  private icon = 'assets/puhelin.png';

  constructor(private service: InfoService) {

  }

  public ngOnInit() {
    this.info = this.service.get();
  }

}
