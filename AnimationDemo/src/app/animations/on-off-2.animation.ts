import { animate, state, style, transition, trigger,keyframes  } from '@angular/animations';

export const ON_OFF_2_ANIMATION =
	trigger('rotateTrigger', [
		state('off', style({
		  backgroundColor: 'red',
		  color: 'white',
		  fontSize: '18px',		  
			transform: 'rotate(360deg) translateX(100%)'
			//transform: 'translateX(100%)'
		})),
		state('on',   style({
		  backgroundColor: '#17202A',
		  color: '#F0F3F4',
		  fontSize: '22px',
			transform: 'rotate(180deg) translateX(0)'
			//transform: 'translateX(0)'
		})),
		transition('off <=> on', animate('5.6s 200ms ease-in',keyframes([ 
		   style({fontSize: '19px', backgroundColor: 'yellow', offset: 0.1 }),
		   style({fontSize: '20px', backgroundColor: 'yellow', offset: 0.3 }),
		   style({fontSize: '21px', backgroundColor: 'yellow', offset: 0.5 })
		]))),
		transition('on => off', animate('6.7s 200ms ease-out', keyframes([ 
		    style({fontSize: '22px', backgroundColor: 'red', offset: 0 }),
		    style({fontSize: '21px', backgroundColor: 'red', offset: 0.2 }),
		    style({fontSize: '20px', backgroundColor: 'red', offset: 0.4 }),
		   style({fontSize: '19px', backgroundColor: 'red', offset: 0.5 })
		 ])))
	]); 