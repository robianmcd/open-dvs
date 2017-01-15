import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "@angular/material";
import {AppComponent} from "./app.component";
import {LibraryComponent} from "./library/library.component";
import {FileDropDirective} from "./library/fileDrop.directive";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {AudioUtil} from "../services/audioUtil";
import {Db} from "../services/db";
import {SpinnerComponent} from "./spinner/spinner.component";
import {DeckComponent} from "./deck/deck.component";
import {CenterControlsComponent} from "./centerControls/centerControls.component";
import {WaveformUtil} from "../services/waveformUtil";
import {ActiveSongs} from "../services/activeSongs";
//import {AgGridModule} from "ag-grid-ng2/main";

@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()/*, AgGridModule.withComponents([])*/],
    declarations: [AppComponent, LibraryComponent, ToolbarComponent, FileDropDirective, SpinnerComponent, DeckComponent, CenterControlsComponent],
    bootstrap: [AppComponent],
    providers: [AudioUtil, WaveformUtil, Db, ActiveSongs]
})

export class AppModule {

}