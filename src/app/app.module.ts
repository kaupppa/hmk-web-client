import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { Saapuminen } from './saapuminen';
import { Etusivu } from './etusivu';
import { Hinnasto } from './hinnasto';
import { CardsModule } from './cards';
import { SeoService } from './common';

@NgModule({
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdButtonModule,
    appRoutingModule,
    CardsModule
    ],
  declarations: [AppComponent, Saapuminen, Etusivu, Hinnasto],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    SeoService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
