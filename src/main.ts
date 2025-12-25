import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initCwr } from './util/init-cwr';

export const rum = initCwr();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
