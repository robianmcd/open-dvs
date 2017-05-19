import {Injectable} from "@angular/core";
import {WorkerType, WorkerUtil} from './workerUtil';

@Injectable()
export class ImageUtil {
    constructor(private workerUtil: WorkerUtil) {

    }

    byteArrayToBase64(byteArr: number[]): Promise<string> {
        return this.workerUtil.run({
            workerType: WorkerType.Image,
            method: 'byteArrayToBase64',
            params: [byteArr]
        });
    }
}