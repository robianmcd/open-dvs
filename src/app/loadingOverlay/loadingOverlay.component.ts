import {Component, Input} from '@angular/core';

@Component({
    selector: 'loading-overlay',
    styleUrls: ['loadingOverlay.component.scss'],
    template: `
<div class="loading-overlay">
    <div class="drop-msg" *ngIf="msg">{{msg}}</div>
    <spinner *ngIf="showSpinner"></spinner>
</div>
`
})
export class LoadingOverlayComponent {
    @Input() msg: string;
    @Input() showSpinner: boolean = true;
}