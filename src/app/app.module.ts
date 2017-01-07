import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MetaModule } from 'ng2-meta';
import { Saapuminen } from './saapuminen';
import { Etusivu } from './etusivu';
import { Hinnasto } from './hinnasto';
import { CardsModule } from './cards';
import { OutletContainer } from './outlet-container';
import { NavBar } from './navbar';

const appRoutes: Routes = [
  {
    path: '',
    component: Etusivu,
    data: {
      meta: {
        title: 'Rekisteröity hieroja Minna Kauppinen (ent. Paaso), Lauttasaari',
        description: 'Klassista hierontaa ja intialaista päähierontaa lauttasaaressa, hyvien kulkuyhteyksien varrella.' +
        ' Ajanvaraus numerosta 050 5477 811. Osoite Lauttasaarentie 37, 00200 Helsinki'
      }
    }
  },
  {
    path: 'saapuminen',
    component: Saapuminen,
    data: {
      meta: {
        title: 'Lauttasaari - Hieroja Minna Kauppinen',
        description: 'Hyvien kulkuyhteyksien varrella, bussilla, metrolla tai autolla.' +
        ' Yksi asiakasparkkipaikka liikehuoneiston edessä.'
      }
    }
  },
  {
    path: 'hinnasto',
    component: Hinnasto,
    data: {
      meta: {
        title: 'Klassista hierontaa ja intialaista päähierontaa - Hieroja Minna Kauppinen'
        // Dynamic description in Hinnasto
      }
    }
  },
  {
    path: '**',
    component: Etusivu,
    data: {
      meta: {
        title: 'Rekisteröity hieroja Minna Kauppinen (ent. Paaso), Lauttasaari',
        description: 'Klassista hierontaa ja intialaista päähierontaa lauttasaaressa, hyvien kulkuyhteyksien varrella.' +
        ' Ajanvaraus numerosta 050 5477 811. Osoite Lauttasaarentie 37, 00200 Helsinki'
      }
    }
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MdToolbarModule,
    MdButtonModule,
    CardsModule,
    MetaModule.forRoot()
  ],
  declarations: [
    AppComponent,
    Saapuminen,
    Etusivu,
    Hinnasto,
    OutletContainer,
    NavBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
