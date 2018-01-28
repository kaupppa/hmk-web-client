import { Component, OnInit } from '@angular/core';

import { Info, InfoService } from './info.service';

declare var L: any;

@Component({
  selector: 'kartta',
  styles: [`
    .app-kartta {
      min-height: 400px;
      min-width: 400px;
      border-radius: 3px;
    }
  `],
  template: `
    <mat-card>
      <p class="yhteystieto">{{info.katuosoite}}, {{info.postiosoite}} {{info.kaupunki}}</p>
      <div id="karttaId" class="app-kartta"></div>
    </mat-card>
  `
})
export class Kartta implements OnInit {
  private info: Info;

  constructor(private service: InfoService) {
  }

  public ngOnInit() {
    this.info = this.service.get();

    let map = this.createMap();
    this.setLayerMap(map);
    this.createMarker(map);
  }

  private createMap() {
    return L.map('karttaId', {
      center: this.info.coord,
      zoom: 17
    });
  }

  private setLayerMap(map: any) {
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  private createMarker(map: any) {
    let marker = L.marker(this.info.coord).addTo(map);
    marker.bindPopup('<p>' + this.info.nimi + '</p><p>' + this.info.katuosoite + '</p>');
    return marker;
  }
}
