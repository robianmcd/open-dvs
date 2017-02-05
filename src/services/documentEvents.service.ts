import {Subject, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class DocumentEvents {
    get mouseMove(): Observable<MouseEvent> {
        return this.mouseMoveSubject.asObservable();
    }

    get mouseUp(): Observable<MouseEvent> {
        return this.mouseUpSubject.asObservable();
    }

    get dragEnd(): Observable<MouseEvent> {
        return this.dragEndSubject.asObservable();
    }

    private mouseMoveSubject = new Subject();
    private mouseUpSubject = new Subject();
    private dragEndSubject = new Subject();

    constructor() {
        document.addEventListener('mousemove', (event) => this.mouseMoveSubject.next(event));
        document.addEventListener('mouseup', (event) => this.mouseUpSubject.next(event));
        document.addEventListener('dragend', (event) => this.dragEndSubject.next(event));
    }
}