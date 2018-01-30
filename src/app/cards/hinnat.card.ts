import { Component, OnInit } from '@angular/core';
import { Palvelu, PalvelutService } from './palvelut.service';

@Component({
  selector: 'hinnat',
  styles: [`
    .app-hinnat table {
      border-collapse: collapse;
    }
    .app-vasen {
      text-align: left;
    }
    .app-oikea {
      text-align: right;
    }
    .app-hinnat table {
      margin: 10px 20px 0 20px;
    }
    .app-hinnat td {
      padding: 10px 30px 10px 10px;
    }
    .app-hinnat th {
      padding: 10px 30px 10px 10px;
      font-weight: inherit;
    }
    .app-hinnat th:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .app-hinnat th:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    .app-hinnat th {
      background-color: #aec4e8
    }

    .app-palvelu:nth-child(even) {
      background-color: #aec4e8
    }
    .app-palvelu td:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .app-palvelu td:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  `],
  template: `
    <mat-card>
      <card-header icon={{icon}}>
        Hinnasto
      </card-header>
      <div class="app-hinnat">
        <table id="app-hinnat-table">
          <thead>
            <tr>
              <th class="app-vasen">Palvelu</th>
              <th class="app-oikea">Kesto</th>
              <th class="app-oikea">Hinta</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let palvelu of palvelut" class="app-palvelu">
              <td class="app-vasen">{{palvelu.nimi}}</td>
              <td class="app-oikea">{{palvelu.kesto}} min</td>
              <td class="app-oikea">{{palvelu.hinta}}€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </mat-card>
  `
})
export class Hinnat implements OnInit {
  private palvelut: Array<Palvelu>;
  private icon = require('assets/henkilo.png');

  constructor(private service: PalvelutService) {
  }

  public ngOnInit() {
    this.palvelut = this.service.get();
  }

}
