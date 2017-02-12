import {Component, Input, Output, EventEmitter} from "@angular/core";
import {MidiMapper, MappingType} from "../../services/midiMapper.service";
import {MidiMsg, MidiMsgType} from "../../services/midiUtil.service";
import {MidiIo} from "../../services/midiIo.service";

@Component({
    selector: 'midi-mapping',
    templateUrl: 'midiMapping.component.html',
    styleUrls: ['midiMapping.component.css']
})
export class MidiMappingComponent {
    @Input() elemId: string;

    @Input() set amount(value: number) {
        let mapping = this.midiMapper.getMapping(this.elemId);
        if (mapping) {
            let msg: MidiMsg = {
                msgType: mapping.control.msgType,
                channel: mapping.control.channel,
                subType: mapping.control.subType,
                amount: value
            };
            this.midiIo.sendMessage(msg);
        }
    }

    ctrl = this;

    get inputElem() {
        return document.getElementById(this.elemId);
    }

    @Output() amountChange = new EventEmitter();

    private shortMidiTypeNames = {
        [MidiMsgType.NoteOff] : 'Note Off',
        [MidiMsgType.NoteOn] : 'Note On',
        [MidiMsgType.PolyAfterTouch] : 'AfTo',
        [MidiMsgType.CC] : 'CC',
        [MidiMsgType.ProgramChange] : 'Prog',
        [MidiMsgType.ChannelAfterTouch] : 'Chan AfTo',
        [MidiMsgType.PitchBend] : 'Pitch Bend',
        [MidiMsgType.SysEx] : 'SysEx',

    };

    constructor(public midiMapper: MidiMapper, private midiIo: MidiIo) {

    }

    onLearnMsg(msg: MidiMsg) {
        this.midiMapper.setMapping(this.elemId, {
            control: {msgType: msg.msgType, channel: msg.channel, subType: msg.subType},
            type: MappingType.Amount,
            comp: this
        });
    }

    onInputMsg(msg: MidiMsg) {
        this.amountChange.next(msg.amount);
    }

    getMappedControlMessage() {
        let mapping = this.midiMapper.getMapping(this.elemId);
        if (mapping) {
            return `${this.shortMidiTypeNames[mapping.control.msgType]}: ${mapping.control.subType}`;
        }
    }
}