import { Component } from '@angular/core';

import { Info, InfoService } from './info.service';

declare var L: any;

@Component({
  selector: 'kartta',
  styles: [`
    #karttaId {
      height: 400px;
      min-width: 200px;
    }
  `],
  template: `
    <md-card>
      <div id="karttaId"></div>
    </md-card>
  `
})
export class Kartta {
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
      zoom: 16
    });
  }

  private setLayerMap(map) {
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  private createMarker(map) {
    let marker = L.marker(this.info.coord).addTo(map);
    marker.bindPopup('<p>' + this.info.nimi + '</p><p>' + this.info.katuosoite + '</p>');
    return marker;
  }
}
