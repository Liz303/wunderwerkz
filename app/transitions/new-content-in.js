import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function newContentIn() {
	console.log('new content in');
	// $('.two').html(this.newElement[0].innerHTML);
	// return Ember.RSVP.resolve();

	 return animate(this.newElement, {opacity: 1});
}

