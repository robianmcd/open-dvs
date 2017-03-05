import {Component} from "@angular/core";
import {SideNav, SideNavState} from "../../services/sidenav.service";
import {MidiMapper} from "../../services/midi/midiMapper.service";

@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
    constructor(private sideNav: SideNav, public midiMapper: MidiMapper) {

    }

    toggleMidiSettings() {
        if(this.sideNav.getState() === SideNavState.Midi) {
            this.sideNav.setState(SideNavState.Closed);
        } else {
            this.sideNav.setState(SideNavState.Midi);
        }
    }

    toggleAudioSettings() {
        if(this.sideNav.getState() === SideNavState.Audio) {
            this.sideNav.setState(SideNavState.Closed);
        } else {
            this.sideNav.setState(SideNavState.Audio);
        }
    }

    toggleFullScreen() {
        let doc = <any>document;

        //Taken from http://stackoverflow.com/a/10627148/373655
        if (!this.isFullScreen()) {
            if (doc.documentElement.requestFullScreen) {
                doc.documentElement.requestFullScreen();
            } else if (doc.documentElement.mozRequestFullScreen) {
                doc.documentElement.mozRequestFullScreen();
            } else if (doc.documentElement.webkitRequestFullScreen) {
                doc.documentElement.webkitRequestFullScreen(Element['ALLOW_KEYBOARD_INPUT']);
            }
        } else {
            if (doc.cancelFullScreen) {
                doc.cancelFullScreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.webkitCancelFullScreen) {
                doc.webkitCancelFullScreen();
            }
        }
    }

    isFullScreen() {
        let doc = <any>document;
        return !doc.fullScreenElement && (doc.mozFullScreen || doc.webkitIsFullScreen);
    }
}