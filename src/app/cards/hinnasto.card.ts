import { Component } from '@angular/core';
import { Palvelu, PalvelutService } from './palvelut.service';

@Component({
  selector: 'hinnasto',
  providers: [PalvelutService],
  styles: [`
    .hinnasto table {
      border-collapse: collapse;
    }
    .vasen {
      text-align: left;
    }
    .oikea {
      text-align: right;
    }
    .hinnasto td {
      padding: 5px 15px 5px 0px;
    }
    .hinnasto th {
      padding: 5px 15px 5px 0px;
    }
    .palvelu:nth-child(odd) {background-color: #aec4e8}
  `],
  template: `
    <md-card>
      <md-card-title>Hinnasto</md-card-title>
      <div class="hinnasto">
        <table>
          <thead>
            <tr>
              <th class="vasen">Palvelu</th>
              <th class="oikea">Kesto</th>
              <th class="oikea">Hinta</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let palvelu of palvelut" class="palvelu">
              <td class="vasen">{{palvelu.nimi}}</td>
              <td class="oikea">{{palvelu.kesto}} min</td>
              <td class="oikea">{{palvelu.hinta}}€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </md-card>
  `
})
export class Hinnasto {
  private palvelut: Array<Palvelu>;

  constructor(private service: PalvelutService) {
  }

  public ngOnInit() {
    this.palvelut = this.service.get();
  }

}
