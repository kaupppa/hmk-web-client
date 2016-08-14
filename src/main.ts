import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
} else {
  Error.stackTraceLimit = Infinity;
}
require('zone.js/dist/long-stack-trace-zone');

browserDynamicPlatform().bootstrapModule(AppModule);
