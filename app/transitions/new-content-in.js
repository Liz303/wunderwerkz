import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function newContentIn() {
	$('.two').html(this.newElement[0].innerHTML);
	if (this.newElement.find('#map').length > 0) {
		console.log('has map');
	}
	return Ember.RSVP.resolve();
}

