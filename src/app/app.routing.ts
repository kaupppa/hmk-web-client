import { Routes, RouterModule } from '@angular/router';

import { Etusivu } from './etusivu';
import { Hinnasto } from './hinnasto';
import { Saapuminen } from './saapuminen';

const appRoutes: Routes = [
  { path: '', component: Etusivu },
  { path: 'saapuminen', component: Saapuminen },
  { path: 'hinnasto', component: Hinnasto },
  { path: '**', component: Etusivu },
];

export const appRoutingModule = RouterModule.forRoot(appRoutes);
