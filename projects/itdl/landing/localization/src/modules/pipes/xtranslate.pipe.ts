import { ChangeDetectorRef, Injectable, Pipe, PipeTransform } from '@angular/core';
import { DestroyableDirective } from '@itdl/shared/common';
import { takeUntil } from 'rxjs';

import { AppTranslateService } from '../services/app-translate.service';

@Pipe({
    name: 'xtranslate',
    pure: false,
})
@Injectable()
export class XTranslatePipe extends DestroyableDirective implements PipeTransform {
    private translationFn!: () => string;

    constructor(private readonly appTranslateService: AppTranslateService, private readonly cdr: ChangeDetectorRef) {
        super();

        this.appTranslateService.translationChange$.pipe(takeUntil(this.onDestroy)).subscribe(() => {
            this.cdr.markForCheck();
        });
    }

    public transform(key: string, args?: unknown): string {
        return this.appTranslateService.translate(key, args);
    }
}
