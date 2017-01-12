import {Component, ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import moment from 'moment';
import {DeckComponent} from "./deck/deck.component";
import {Song} from "../models/song";

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChildren(DeckComponent) decksQuery: QueryList<DeckComponent>;
    deck1: DeckComponent;
    deck2: DeckComponent;

    constructor() {
        let sampleMomentUsage = moment().format();
    }

    ngAfterViewInit() {
        [this.deck1, this.deck2] = this.decksQuery.toArray()
    }

    //TODO: use an enum instead of a number
    onLoadSong({song, deckNum}: {song:Song, deckNum:number}) {
        let deck: DeckComponent = this[`deck${deckNum}`];
        deck.loadSong(song);
    }
}