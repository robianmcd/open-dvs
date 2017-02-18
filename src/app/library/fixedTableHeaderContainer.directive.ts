import {Directive, HostListener} from "@angular/core";

@Directive({selector: '[fixedTableHeaderContainer]'})
export class FixedTableHeaderContainerDirective {
    @HostListener('scroll', ['$event'])
    public onScroll(event: any): void {
        let elem = event.target;
        let translate = "translate(0,"+elem.scrollTop+"px)";

        const allTh = elem.querySelectorAll("th");
        for( let i=0; i < allTh.length; i++ ) {
            allTh[i].style.transform = translate;
        }
    }
}