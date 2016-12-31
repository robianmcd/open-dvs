import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import {AppComponent}  from './app.component';

@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}