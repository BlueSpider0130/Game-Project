import { NgModule } from '@angular/core';
import { ButtonToScrollModule } from '@itdl/shared/navigation';

import { WithButtonToScrollComponent } from './with-button-to-scroll-decorator.component';

@NgModule({
    imports: [ButtonToScrollModule],
    exports: [WithButtonToScrollComponent],
    declarations: [WithButtonToScrollComponent],
    providers: [],
})
export class WithButtonToScrollModule {}
