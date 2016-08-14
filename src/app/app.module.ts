import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { Saapuminen } from './saapuminen';
import { Etusivu } from './etusivu';
import { Hinnasto } from './hinnasto';
import { CardsModule } from './cards';

@NgModule({
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdButtonModule,
    appRoutingModule,
    CardsModule
    ],
  declarations: [AppComponent, Saapuminen, Etusivu, Hinnasto],
  bootstrap: [AppComponent]
})
export class AppModule { }
