import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpModule } from '@itdl/shared/http';
import { L10nIntlModule, L10nLoader, L10nTranslationModule } from 'angular-l10n';

import { appL10nConfig } from './config/app-l10.config';
import { AppL10nTranslationLoader } from './services/app-l10n-translation-loader.service';
import { AppTranslateService } from './services/app-translate.service';
import { appL10nInitializer } from './utils/app-l10n-initializer.utils';

@NgModule({
    imports: [
        HttpModule,
        L10nTranslationModule.forRoot(appL10nConfig, {
            translationLoader: AppL10nTranslationLoader,
        }),
        L10nIntlModule,
    ],
    providers: [
        AppTranslateService,
        {
            provide: APP_INITIALIZER,
            useFactory: appL10nInitializer,
            deps: [L10nLoader],
            multi: true,
        },
    ],
})
export class RootLocalizationModule {}
