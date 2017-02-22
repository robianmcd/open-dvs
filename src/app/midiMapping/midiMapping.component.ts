import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {MidiMapper, MappingType} from "../../services/midiMapper.service";
import {MidiMsg, MidiMsgType} from "../../services/midiUtil.service";
import {MidiIo} from "../../services/midiIo.service";

@Component({
    selector: 'midi-mapping',
    templateUrl: 'midiMapping.component.html',
    styleUrls: ['midiMapping.component.css']
})
export class MidiMappingComponent implements OnInit {
    @Input() elemId: string;

    private _amount: number;
    @Input() set amount(value: number) {
        this._amount = value;

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
        [MidiMsgType.NoteOff]: 'Note Off',
        [MidiMsgType.NoteOn]: 'Note On',
        [MidiMsgType.PolyAfterTouch]: 'AfTo',
        [MidiMsgType.CC]: 'CC',
        [MidiMsgType.ProgramChange]: 'Prog',
        [MidiMsgType.ChannelAfterTouch]: 'Chan AfTo',
        [MidiMsgType.PitchBend]: 'Pitch Bend',
        [MidiMsgType.SysEx]: 'SysEx',

    };

    constructor(public midiMapper: MidiMapper, private midiIo: MidiIo) {

    }

    ngOnInit() {
        this.midiMapper.registerMappingComp(this.elemId, this);
    }

    onLearnMsg(msg: MidiMsg) {
        if (msg.msgType === MidiMsgType.NoteOff) {
            return;
        }

        let mappingType = (msg.msgType === MidiMsgType.NoteOn) ? MappingType.Latch : MappingType.Amount;

        this.midiMapper.setMapping(this.elemId, {
            control: {msgType: msg.msgType, channel: msg.channel, subType: msg.subType},
            type: mappingType
        });
    }

    onInputMsg(msg: MidiMsg) {
        let mapping = this.midiMapper.getMapping(this.elemId);

        if (mapping.type === MappingType.Amount) {
            this.amountChange.next(msg.amount);

        } else if (mapping.type === MappingType.Latch) {
            if(msg.amount === 0) {
                return;
            } else {
                if(this._amount === 1) {
                    this.amountChange.next(0);
                } else {
                    this.amountChange.next(1);
                }
            }
        }

    }

    getMappedControlMessage() {
        let mapping = this.midiMapper.getMapping(this.elemId);
        if (mapping) {
            return `${this.shortMidiTypeNames[mapping.control.msgType]}: ${mapping.control.subType}`;
        }
    }
}