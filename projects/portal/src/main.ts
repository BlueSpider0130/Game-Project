import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PortalAppModule } from '@itdl/portal/portal-app';

platformBrowserDynamic()
    .bootstrapModule(PortalAppModule)
    .catch((err) => console.error(err));
