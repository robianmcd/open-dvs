import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "@angular/material";
import {AppComponent} from "./app.component";
import {LibraryComponent} from "./library/library.component";
import {FileDropDirective} from "./library/fileDrop.directive";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {AudioUtil} from "../services/audioUtil";
import {SongDb} from "../services/db/songDb.service";
import {SpinnerComponent} from "./spinner/spinner.component";
import {DeckComponent} from "./deck/deck.component";
import {CenterControlsComponent} from "./centerControls/centerControls.component";
import {WaveformUtil} from "../services/waveformUtil";
import {ActiveSongs} from "../services/activeSongs";
import {AnimationFrames} from "../services/animationFrames.service";
import {DocumentEvents} from "../services/documentEvents.service";
import {CrossfaderComponent} from "./centerControls/crossfader/crossfader.component";
import {SideNav} from "../services/sidenav.service";
import {SideNavComponent} from "./sideNav/sideNav.component";
import {AudioSettingsComponent} from "./sideNav/audioSettings/audioSettings.component";
import {MidiSettingsComponent} from "./sideNav/midiSettings.component";
import {MidiIo} from "../services/midiIo.service";
import {MidiUtil} from "../services/midiUtil.service";
import {MidiMapper} from "../services/midiMapper.service";
import {MidiMappingComponent} from "./midiMapping/midiMapping.component";
import {Db} from "../services/db/db.service";
import {PreferencesDb} from "../services/db/preferencesDb.service";
import {FixedTableHeaderContainerDirective} from "./library/fixedTableHeaderContainer.directive";
import {AudioSettings} from "./sideNav/audioSettings/audioSettings.service";
import {DeckAudioSettingsComponent} from "./sideNav/audioSettings/deckAudioSettings.component";
import {FormsModule} from "@angular/forms";
import {DspUtil} from "../services/dspUtil.service";
import {FaderComponent} from "./fader/fader.component";

@NgModule({
    imports: [BrowserModule, MaterialModule, FormsModule],
    declarations: [AppComponent, LibraryComponent, ToolbarComponent, FileDropDirective, SpinnerComponent, DeckComponent,
        CenterControlsComponent, CrossfaderComponent, SideNavComponent, AudioSettingsComponent, MidiSettingsComponent,
        MidiMappingComponent, FixedTableHeaderContainerDirective, DeckAudioSettingsComponent, FaderComponent],
    bootstrap: [AppComponent],
    providers: [AudioUtil, WaveformUtil, SongDb, ActiveSongs, AnimationFrames, DocumentEvents, SideNav, MidiIo, MidiUtil,
        MidiMapper, Db, PreferencesDb, AudioSettings, DspUtil]
})

export class AppModule {

}