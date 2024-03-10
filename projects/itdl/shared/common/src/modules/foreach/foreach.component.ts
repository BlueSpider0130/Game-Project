import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'shrl-foreach',
    templateUrl: './foreach.component.html',
    styleUrls: ['./foreach.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShrlForeachComponent {
    @Input() public items!: unknown[];
    @ContentChild(TemplateRef) public content!: TemplateRef<unknown>;
}
