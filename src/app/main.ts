import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import * as moment from 'moment';
import 'moment/min/locales';

moment.locale('es');

platformBrowserDynamic().bootstrapModule(AppModule);
