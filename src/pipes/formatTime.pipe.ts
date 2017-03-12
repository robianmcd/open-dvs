import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'formatTime'})
export class FormatTimePipe implements PipeTransform {
    transform(timeInSeconds: number): string {
        let minutes = Math.round(timeInSeconds / 60).toString();
        let seconds = Math.round(timeInSeconds % 60).toString();

        seconds.length === 1 && (seconds = '0' + seconds);

        return `${minutes}:${seconds}`;
    }
}