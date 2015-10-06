import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';
export default function slideCardsDown() {
	console.log('cards right');
  // return Ember.RSVP.hash({
  // 	cardTwo: animate($('.two'), {top: "+=10", left: "+=10"}),
  // 	cardThree: animate($('.three'), {top: "+=10", left: "+=10"}),
  // 	cardFour: animate($('.four'), {top: "+=10", left: "+=10"})
  // }); 

	return animate(this.newElement, {left: '0px', top: '0px'});
}
