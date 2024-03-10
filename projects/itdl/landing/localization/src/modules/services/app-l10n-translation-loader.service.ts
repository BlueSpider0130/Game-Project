import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheObservable } from '@itdl/shared/common';
import { HttpService } from '@itdl/shared/http';
import { ILocalizationFileConfig } from '@itdl/shared/localization';
import { L10nProvider, L10nTranslationLoader } from 'angular-l10n';
import merge from 'lodash-es/merge';
import { forkJoin, map, Observable } from 'rxjs';

import { appLocalizationFiles } from '../config/app-localization.config';

type JsonFileType = { [key: string]: any };

@Injectable()
export class AppL10nTranslationLoader implements L10nTranslationLoader {
    private readonly headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private readonly httpService: HttpService) {}

    @CacheObservable()
    public get(languageCode: string, _provider: L10nProvider): Observable<JsonFileType> {
        const options = {
            headers: this.headers,
        };

        const requests = appLocalizationFiles
            .map((file) => this.buildUrl(languageCode, file))
            .map((url) => this.httpService.get<JsonFileType>(url, options));

        return forkJoin(requests).pipe(map((data) => this.mergeLocalizationFiles(data)));
    }

    private buildUrl(language: string, file: ILocalizationFileConfig) {
        const url = `${file.prefix}${language}${file.suffix}`;

        return url;
    }

    private mergeLocalizationFiles(data: JsonFileType[]) {
        return data.reduce((previousFile, currentFile) => merge(previousFile, currentFile));
    }
}
