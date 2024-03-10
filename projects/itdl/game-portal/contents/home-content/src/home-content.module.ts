import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GpllUserProfileComponent } from '@itdl/game-portal/features/auth';
import {
    GpllStripeDonateButtonComponent,
    GpllStripeExpressCheckoutComponent,
} from '@itdl/game-portal/features/payment/stripe-integration';
import { GpllLoaderComponent, GpllThemeTogglerComponent } from '@itdl/game-portal/ui';
import { ShrlServerLoaderComponentTypeToken, ShrlServerLoaderModule } from '@itdl/shared/ui';
import { EditorModule } from '@tinymce/tinymce-angular';

import { GpllDonationSectionComponent } from './donation-section/donation-section.component';
import { GpllFeaturesSectionComponent } from './features-section/features-section.component';
import { GpllFeedbackSectionComponent } from './feedback-section/feedback-section.component';
import { GpllHomeContentComponent } from './home-content.component';
import { GpllStickyBoardSectionComponent } from './sticky-board-section/sticky-board-section.component';

@NgModule({
    imports: [
        CdkDrag,
        CommonModule,
        EditorModule,
        GpllDonationSectionComponent,
        GpllFeaturesSectionComponent,
        GpllFeedbackSectionComponent,
        GpllStickyBoardSectionComponent,
        GpllStripeDonateButtonComponent,
        GpllStripeExpressCheckoutComponent,
        GpllThemeTogglerComponent,
        GpllUserProfileComponent,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSlideToggleModule,
        MatToolbarModule,
        ShrlServerLoaderModule,
    ],
    exports: [GpllHomeContentComponent],
    declarations: [GpllHomeContentComponent],
    providers: [{ provide: ShrlServerLoaderComponentTypeToken, useValue: GpllLoaderComponent }],
})
export class GpllHomeContentModule {}
