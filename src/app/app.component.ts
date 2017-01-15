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
    DeckId = DeckId;
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

export enum DeckId {LEFT=1, RIGHT=2}

enum ThemeId {DEFAULT=0, DECK1=1, DECK2=2}
namespace ThemeId {
    export function fromDeckId(deckId: DeckId): ThemeId {
        switch(deckId) {
            case DeckId.LEFT:
                return ThemeId.DECK1;
            case DeckId.RIGHT:
                return ThemeId.DECK2;
        }
    }
}

export {ThemeId};