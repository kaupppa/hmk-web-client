import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatToolbarModule,MatButtonModule,MATERIAL_SANITY_CHECKS } from '@angular/material';
import { Saapuminen } from './saapuminen';
import { Etusivu } from './etusivu';
import { Hinnasto } from './hinnasto';
import { CardsModule } from './cards';
import { OutletContainer } from './outlet-container';
import { NavBar } from './navbar';

const appRoutes: Routes = [
  {
    path: '',
    component: Etusivu
  },
  {
    path: 'saapuminen',
    component: Saapuminen
  },
  {
    path: 'hinnasto',
    component: Hinnasto
  },
  {
    path: '**',
    component: Etusivu
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    CardsModule
  ],
  declarations: [
    AppComponent,
    Saapuminen,
    Etusivu,
    Hinnasto,
    OutletContainer,
    NavBar
  ],
  providers: [{
    provide: MATERIAL_SANITY_CHECKS,
    useValue: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
