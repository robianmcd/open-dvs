import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class WorkerUtil {

    workersByType = {
        [WorkerType.Waveform]: new Worker('webWorkers/waveformWorker.js'),
        [WorkerType.Image]: new Worker('webWorkers/imageWorker.js')
    };

    constructor() {

    }

    run({workerType, method, params, transferObjs=[]}: {workerType: WorkerType, method: string, params: any[], transferObjs?: any[]}) {
        let worker = this.workersByType[workerType];

        return new Promise((resolve, reject) => {
            let msgId = Math.random();
            worker.postMessage({method, params, msgId}, transferObjs);

            let handler = (e) => {
                if(e.data.msgId === msgId) {
                    worker.removeEventListener('message', handler);
                    if(e.data.error) {
                        reject(e.data.error);
                    } else {
                        resolve(e.data.result);
                    }
                }
            };
            worker.addEventListener('message', handler, false);
        });
    }
}

export enum WorkerType {Image, Waveform}