import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdListModule } from '@angular2-material/list';
import { Hinnasto } from './hinnasto.card';
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

const cards: any[] = [
  Hinnasto,
  Ajanvaraus,
  Yhteystiedot,
  Kartta,
  Esittely,
  Aukioloaika,
  Peruutus,
  Julkinen,
  Parkki
  ];

const services: any[] = [
  InfoService,
  PalvelutService
  ];

@NgModule({
  imports: [
    BrowserModule,
    MdCardModule,
    MdButtonModule,
    MdListModule
    ],
  exports: cards,
  declarations: cards,
  providers: services
})
export class CardsModule { }
