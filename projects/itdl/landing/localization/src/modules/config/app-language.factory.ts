import { ILanguageConfig } from '@itdl/shared/localization';

import { LanguageCode } from '../enums/language-code.enum';
import { LanguageType } from '../enums/language-type.enum';

export class AppLanguageConfigFactory {
    public static languages: Record<LanguageType, ILanguageConfig> = {
        [LanguageType.English]: {
            type: LanguageType.English,
            code: LanguageCode.English,
            viewValue: 'English',
        },
        [LanguageType.Russian]: {
            type: LanguageType.Russian,
            code: LanguageCode.Russian,
            viewValue: 'Русский',
        },
    };

    public static languageSet: Record<LanguageType | LanguageCode, ILanguageConfig> = {
        [LanguageType.English]: AppLanguageConfigFactory.languages[LanguageType.English],
        [LanguageCode.English]: AppLanguageConfigFactory.languages[LanguageType.English],

        [LanguageType.Russian]: AppLanguageConfigFactory.languages[LanguageType.Russian],
        [LanguageCode.Russian]: AppLanguageConfigFactory.languages[LanguageType.Russian],
    };

    public static get(languageType: LanguageType | LanguageCode) {
        return AppLanguageConfigFactory.languageSet[languageType];
    }
}
