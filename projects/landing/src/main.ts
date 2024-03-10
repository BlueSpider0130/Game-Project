import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LandingAppModule } from '@landing/landing-app.module';

platformBrowserDynamic()
    .bootstrapModule(LandingAppModule)
    .catch((err) => console.error(err));
