import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gpll-input-control',
    templateUrl: 'input-control.component.html',
    styleUrls: ['input-control.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class GpllInputControlComponent {
    @Input() hostClasses: string[] = [];

    @HostBinding('class')
    public get _hostClasses() {
        return [...this.hostClasses];
    }
}
