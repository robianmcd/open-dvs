import { Injectable } from '@angular/core';
import {AudioUtil} from "./audio/audioUtil.service";
import {DeckId} from "../app/app.component";

@Injectable()
export class AudioOutput {

    private inputGainNodes = new Map<DeckId, GainNode>();
    private masterGain: GainNode;

    constructor(private audioUtil: AudioUtil) {
        this.inputGainNodes.set(DeckId.LEFT, audioUtil.context.createGain());
        this.inputGainNodes.set(DeckId.RIGHT, audioUtil.context.createGain());

        this.masterGain = audioUtil.context.createGain();

        this.inputGainNodes.get(DeckId.LEFT).connect(this.masterGain);
        this.inputGainNodes.get(DeckId.RIGHT).connect(this.masterGain);

        this.masterGain.connect(audioUtil.context.destination);
    }

    getInputForDeck(deckId: DeckId): AudioNode {
        return this.inputGainNodes.get(deckId);
    }

    setDeckGain(deckId: DeckId, gain: number) {
        this.inputGainNodes.get(deckId).gain.value = gain;
    }

    setMasterGain(gain: number) {
        this.masterGain.gain.value = gain;
    }

    getDeckGain(deckId: DeckId): number {
        return this.inputGainNodes.get(deckId).gain.value;
    }

    getMasterGain(): number {
        return this.masterGain.gain.value;
    }

}