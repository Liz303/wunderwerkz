import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function newContentIn() {
	return Ember.RSVP.hash({
		one: this.oldElement.css('z-index', 100),
		two: animate(this.newElement, {opacity: 1})
	})
}

