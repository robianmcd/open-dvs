import {
    Directive,
    EventEmitter,
    ElementRef,
    HostListener,
    Input,
    Output,
} from '@angular/core';

@Directive({ selector: '[fileDrop]' })
export class FileDropDirective {
    @Output() public fileOver = new EventEmitter<boolean>();
    @Output() public onFileDrop = new EventEmitter<File[]>();

    private element: ElementRef;

    public constructor(
        element: ElementRef
    ) {
        this.element = element;
    }

    dragLevel = 0;

    @HostListener('dragover', ['$event'])
    public onDragOver(event: any): void {
        const transfer = this.getDataTransfer(event);

        if (!this.haveFiles(transfer.types)) {
            return;
        }

        transfer.dropEffect = 'copy';
        this.preventAndStop(event);
    }

    @HostListener('dragenter', ['$event'])
    public onDragEnter(event: any): void {
        this.dragLevel++;
        this.emitFileOver();
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: any): void {
        this.dragLevel--;

        this.preventAndStop(event);
        if(this.dragLevel === 0) {
            this.emitFileOver();
        }
    }

    @HostListener('drop', ['$event'])
    public onDrop(event: any): void {
        const transfer = this.getDataTransfer(event);

        if (!transfer) {
            return;
        }

        this.preventAndStop(event);
        this.dragLevel = 0;
        this.emitFileOver();
        this.onFileDrop.emit(Array.from(transfer.files));
    }

    private emitFileOver(): void {
        this.fileOver.emit(this.dragLevel > 0);
    }

    private getDataTransfer(event: any | any): DataTransfer {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }

    private preventAndStop(event: any): void {
        event.preventDefault();
        event.stopPropagation();
    }

    private haveFiles(types: any): boolean {
        if (!types) {
            return false;
        }

        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }

        if (types.contains) {
            return types.contains('Files');
        }

        return false;
    }
}