import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { GpllInputControlComponent } from './input-control.component';

@NgModule({
    imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    exports: [GpllInputControlComponent],
    declarations: [GpllInputControlComponent],
    providers: [],
})
export class GpllInputControlModule {}
