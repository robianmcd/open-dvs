import {Component} from '@angular/core';
import moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styles: [`
        h1 {
            color: red;
        }
    `],
    styleUrls: ['app.css']
})
export class AppComponent {
    showHeading = true;
    heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];

    constructor() {
        this.heroes.push(moment().format());
    }

    toggleHeading() {
        this.showHeading = !this.showHeading;
    }
}