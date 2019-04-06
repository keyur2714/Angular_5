import { animate, state, style, transition, trigger } from '@angular/animations';
export const STATE_ANIMATIONS =
    trigger('stateTrigger', [
		state('start', style({
          backgroundColor: 'red',
		  transform: 'translateX(0) scale(1)'
		})),
		state('stop',   style({
		  backgroundColor: 'green',
		  transform: 'translateX(100%) scale(0.5)'
        })),
        transition('start => stop', animate('1000ms ease-in')),        		
        transition('stop => start', animate('500ms ease-out'))
	]);