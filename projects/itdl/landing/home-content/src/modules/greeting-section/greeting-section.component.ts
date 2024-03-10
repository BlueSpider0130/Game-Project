import { Component, Input } from '@angular/core';
import { fade } from '@itdl/shared/animations';

@Component({
    selector: 'lndl-greeting-section',
    templateUrl: 'greeting-section.component.html',
    styleUrls: ['./greeting-section.component.scss'],
    animations: [fade],
})
export class GreetingSectionComponent {
    @Input() backgroundSrc!: string;
}
