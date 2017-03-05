import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";

@Injectable()
export class AudioUtil {
    context = new AudioContext();
    private inputDevices = new ReplaySubject<MediaDeviceInfo[]>();
    private outputDevices = new ReplaySubject<MediaDeviceInfo[]>();

    get inputDevices$(): Observable<MediaDeviceInfo[]> {
        return this.inputDevices.asObservable();
    }

    get outputDevices$(): Observable<MediaDeviceInfo[]> {
        return this.outputDevices.asObservable();
    }

    constructor() {
        //The requests for microphone access. Without this we can't get the names of audio inputs and outputs
        navigator.getUserMedia({audio: true}, () => this.onUserMediaLoad(), () => this.onUserMediaError());
    }

    public copyBuffer(buf: Float32Array, start?: number, size?: number) {
        if(start === undefined) {
            start = 0;
        }

        if(size === undefined) {
            size = buf.length;
        }

        let output = new Float32Array(size);

        for (let i = 0; i < size; i++) {
            output[i] = buf[i + start];
        }

        return output;
    }

    private onUserMediaLoad() {
        //TODO: check if this event actually triggers change detection. Might have issues with zone.js
        navigator.mediaDevices.ondevicechange = () => this.updateDeviceLists();
        this.updateDeviceLists();
    }

    private onUserMediaError() {
        console.error('Could not get access to audio inputs');
    }

    private updateDeviceLists() {
        navigator.mediaDevices.enumerateDevices().then((devices: MediaDeviceInfo[]) => {
            let inputDevices = [];
            let outputDevices = [];

            devices.forEach((device: MediaDeviceInfo) => {
                //Not sure what the 'Communications' device is...
                if (device.label !== 'Communications') {
                    if (device.kind === 'audioinput') {
                        inputDevices.push(device);

                    } else if (device.kind === 'audiooutput') {
                        outputDevices.push(device);
                    }
                }
            });

            this.inputDevices.next(inputDevices);
            this.outputDevices.next(outputDevices);
        });
    }

}