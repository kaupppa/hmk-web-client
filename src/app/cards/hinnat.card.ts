import { Component } from '@angular/core';
import { Palvelu, PalvelutService } from './palvelut.service';

@Component({
  selector: 'hinnat',
  providers: [PalvelutService],
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
      margin: 20px;
    }
    .app-hinnat td {
      padding: 10px;
    }
    .app-hinnat th {
      padding: 10px;
    }
    .app-palvelu:nth-child(odd) {
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
    <md-card>
      <md-card-title>Hinnasto</md-card-title>
      <div class="app-hinnat">
        <table>
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
    </md-card>
  `
})
export class Hinnat {
  private palvelut: Array<Palvelu>;

  constructor(private service: PalvelutService) {
  }

  public ngOnInit() {
    this.palvelut = this.service.get();
  }

}
