import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { AppTranslateService, LanguageCode } from '@itdl/landing/localization';

@Component({
    selector: 'lndl-home-content',
    templateUrl: './home-content.component.html',
})
export class HomeContentComponent implements OnInit {
    @ContentChild('homeContentTemplate') homeContentTemplate!: TemplateRef<any>;
    @ContentChild('footerTemplate') footerTemplate!: TemplateRef<any>;

    @Input() logoSrc!: string;
    @Input() backgroundSrc!: string;

    constructor(private readonly appTranslationService: AppTranslateService) {}

    ngOnInit() {
        console.log(this.logoSrc, this.backgroundSrc);
    }

    public languageChanged(language: LanguageCode) {
        this.appTranslationService.setLocaleLanguage(language);
    }
}
