import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Hinnat } from './hinnat.card';
import { Ajanvaraus } from './ajanvaraus.card';
import { Yhteystiedot } from './yhteystiedot.card';
import { Kartta } from './kartta.card';
import { Esittely } from './esittely.card';
import { Aukioloaika } from './aukioloaika.card';
import { Peruutus } from './peruutus.card';
import { Julkinen } from './julkinen.card';
import { Parkki } from './parkki.card';
import { InfoService } from './info.service';
import { PalvelutService } from './palvelut.service';
import { CardHeader } from './header.card';

const cards: any[] = [
  Hinnat,
  Ajanvaraus,
  Yhteystiedot,
  Kartta,
  Esittely,
  Aukioloaika,
  Peruutus,
  Julkinen,
  Parkki,
  CardHeader
];

@NgModule({
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  exports: cards,
  declarations: cards,
  providers: [
    InfoService,
    PalvelutService
  ]
})
export class CardsModule { }
