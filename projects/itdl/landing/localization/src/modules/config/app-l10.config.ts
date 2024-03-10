import { L10nConfig } from 'angular-l10n/public-api';

import { LanguageCode } from '../enums/language-code.enum';

export const appL10nConfig: L10nConfig = {
    format: 'language-region',
    providers: [{ name: 'app', asset: [] }],
    fallback: false,
    cache: false,
    keySeparator: '.',
    defaultLocale: { language: LanguageCode.English },
    schema: [
        {
            locale: { language: LanguageCode.Russian },
            dir: 'ltr',
        },
    ],
    defaultRouting: true,
};
