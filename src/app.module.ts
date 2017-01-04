import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "@angular/material";
import {AppComponent} from "./app.component";
import {LibraryComponent} from "./library/library.component";
import {FileDropDirective} from "./library/fileDrop.directive";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {AudioUtil} from "./services/audioUtil";
import {Db} from "./services/db";
import {SpinnerComponent} from "./spinner/spinner.component";

@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [AppComponent, LibraryComponent, ToolbarComponent, FileDropDirective, SpinnerComponent],
    bootstrap: [AppComponent],
    providers: [AudioUtil, Db]
})

export class AppModule {

}