import {Component} from '@angular/core';
import {SideNav, SideNavState} from "../../services/sidenav.service";

@Component({
    selector: 'side-nav',
    template: `
<div id="sideNav" style="width: 300px">
    <midi-settings *ngIf="(sideNav.state$ | async) === SideNavState.Midi"></midi-settings>
    <audio-settings *ngIf="(sideNav.state$ | async) === SideNavState.Audio"></audio-settings>
</div>
`
})
export class SideNavComponent {
    SideNavState = SideNavState;

    constructor(public sideNav: SideNav) {

    }
}