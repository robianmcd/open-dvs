import {platformBrowser}    from '@angular/platform-browser';
import {AppModuleNgFactory} from '../aot/src/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);