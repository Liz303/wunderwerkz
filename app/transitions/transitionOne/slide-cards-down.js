import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';
export default function slideCardsDown() {
	return Ember.RSVP.hash({
  	one:  this.newElement.find('.four').css({'border-left': '3px solid black'}),
  	two: animate(this.newElement, {left: '0px', width: '100%'})
  	});
}
