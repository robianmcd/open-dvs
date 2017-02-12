import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {MidiIo} from "./midiIo.service";
import {MidiMappingComponent} from "../app/midiMapping/midiMapping.component";
import {MidiControl, MidiMsg} from "./midiUtil.service";

@Injectable()
export class MidiMapper {
    private learnMode = new BehaviorSubject<boolean>(false);
    activeLearnMappingComp: MidiMappingComponent;

    private mappings = new Map<string, MidiMapping>();

    get learnMode$(): Observable<boolean> {
        return this.learnMode.asObservable();
    }

    constructor(midiIo: MidiIo) {
        midiIo.msg$.subscribe((msg) => this.onInputMsg(msg));
    }

    setLearnMode(value: boolean) {
        !value && (this.activeLearnMappingComp = undefined);
        this.learnMode.next(value);
    }

    toggleLearnMode() {
        this.setLearnMode(!this.learnMode.getValue());
    }

    getLearnMode(): boolean {
        return this.learnMode.getValue();
    }

    setMapping(id: string, mapping: MidiMapping) {
        this.mappings.set(id, mapping);
    }

    getMapping(id: string): MidiMapping {
        return this.mappings.get(id);
    }

    private onInputMsg(msg: MidiMsg) {
        if (this.activeLearnMappingComp) {
            this.activeLearnMappingComp.onLearnMsg(msg);
        } else if (!this.getLearnMode()) {
            this.mappings.forEach((mapping: MidiMapping) => {
                if (
                    mapping.control.msgType === msg.msgType &&
                    mapping.control.channel === msg.channel &&
                    mapping.control.subType === msg.subType
                ) {
                    mapping.comp.onInputMsg(msg);
                }
            });
        }
    }
}

export interface MidiMapping {
    control: MidiControl,
    type: MappingType,
    comp: MidiMappingComponent
}

export enum MappingType {
    //Map the amount directly to the control
    Amount,
    //Toggle the control whenever a non-zero midi amount is sent
    //TODO use latch be default for note messages
    Latch
}