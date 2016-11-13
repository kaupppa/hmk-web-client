import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { Saapuminen } from './saapuminen';
import { Etusivu } from './etusivu';
import { Hinnasto } from './hinnasto';
import { CardsModule } from './cards';
import { InfoService } from './cards/info.service';
import { OutletContainer } from './outlet-container';
import { NavBar } from './navbar';

const appRoutes: Routes = [
    { path: '', component: Etusivu },
    { path: 'saapuminen', component: Saapuminen },
    { path: 'hinnasto', component: Hinnasto },
    { path: '**', component: Etusivu },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        MdToolbarModule,
        MdButtonModule,
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
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        InfoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
