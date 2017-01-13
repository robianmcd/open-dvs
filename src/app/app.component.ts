import {Component, ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import moment from 'moment';
import {DeckComponent} from "./deck/deck.component";
import {LoadSongEvent} from "./library/library.component";

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

    onLoadSong({song, deckId}: LoadSongEvent) {
        let deck: DeckComponent = this[`deck${deckId}`];
        deck.loadSong(song);
    }
}

export enum DECK_ID {LEFT=1, RIGHT=2}