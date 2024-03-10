import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageCode } from '@itdl/landing/localization';

import { MenuItemConfig } from '../menu-item/models/menu-item.config.model';

@Component({
    selector: 'lndl-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class LndlNavComponent {
    private readonly rootLocalizationKey = 'HomePage.GreetingSection.NavigationMenu';
    private readonly localizationKeys = {
        HomeTitle: `${this.rootLocalizationKey}.Home.Title`,
        AboutUsTitle: `${this.rootLocalizationKey}.AboutUs.Title`,
        WhoWeAreTitle: `${this.rootLocalizationKey}.AboutUs.SubMenus.WhoWeAre.Title`,
        WhatWeDoTitle: `${this.rootLocalizationKey}.AboutUs.SubMenus.WhatWeDo.Title`,
        WhatAreOurGoalsTitle: `${this.rootLocalizationKey}.AboutUs.SubMenus.WhatAreOurGoals.Title`,
        ContactUsTitle: `${this.rootLocalizationKey}.ContactUs.Title`,
    };

    public readonly languageMenuItemConfig: MenuItemConfig = {
        titleKey: 'Language',
        subMenus: [
            { titleKey: 'EN', action: this.languageChange.bind(this, LanguageCode.English) },
            { titleKey: 'RU', action: this.languageChange.bind(this, LanguageCode.Russian) },
        ],
    };

    public readonly homeMenuItemConfig: MenuItemConfig = { titleKey: this.localizationKeys.HomeTitle };
    public readonly aboutUsMenuItemConfig: MenuItemConfig = {
        titleKey: this.localizationKeys.AboutUsTitle,
        subMenus: [
            { titleKey: this.localizationKeys.WhoWeAreTitle, logicAnchorName: 'whoWeAre' },
            { titleKey: this.localizationKeys.WhatWeDoTitle, logicAnchorName: 'whatWeDo' },
            { titleKey: this.localizationKeys.WhatAreOurGoalsTitle },
        ],
    };

    public readonly contactUsItemConfig: MenuItemConfig = { titleKey: this.localizationKeys.ContactUsTitle };

    @Input() logoSrc!: string;

    @Output() languageChangedEvent = new EventEmitter<LanguageCode>();

    private languageChange(languageType: LanguageCode) {
        this.languageChangedEvent.emit(languageType);
    }
}
