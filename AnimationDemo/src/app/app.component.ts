import { Component, HostBinding } from '@angular/core';
import { STATE_ANIMATIONS } from './animations/state-animation';
import { ON_OFF_2_ANIMATION } from './animations/on-off-2.animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    STATE_ANIMATIONS,
    ON_OFF_2_ANIMATION,
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AppComponent {
  title = 'AnimationDemo';

  @HostBinding('@roundAntiClockTrigger') 
  roundAntiClockTrigger = 'in'; 

  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  names: string[]=["keyur","denish","vinit"];

  rotateState: string = 'on';
  state: string = 'start';

  toggleState():void{
    this.state = this.state == 'start' ? 'stop' : 'start';
    this.rotateState = this.rotateState == 'on' ? 'off' : 'on';
  }
}
