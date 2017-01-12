import {Component} from "@angular/core";

@Component({
    selector: 'spinner',
    template: `
<div class="overlay"></div>
<div class='uil-ripple-css'> 
    <div></div> 
    <div></div> 
</div>`,
    styles: [`
@keyframes uil-ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0 0 0 0;
  }
  33% {
    width: 44%;
    height: 44%;
    margin: -22% 0 0 -22%;
    opacity: 1;
  }
  100% {
    width: 88%;
    height: 88%;
    margin: -44% 0 0 -44%;
    opacity: 0;
  }
}
.uil-ripple-css {
  position: absolute;
  width: 64px;
  height: 64px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.uil-ripple-css div {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: 0;
  width: 0;
  height: 0;
  opacity: 0;
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  animation: uil-ripple 2s linear infinite;
}
.uil-ripple-css div:nth-of-type(1) {
  border-color: #165eaa;
}
.uil-ripple-css div:nth-of-type(2) {
  border-color: #632b9b;
  animation-delay: 1s;
}
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 1;
    top: 0;
}
`]
})
export class SpinnerComponent {
    constructor() {

    }
}