import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";

export default function newContentIn() {
	$('.two').html(this.newElement[0].innerHTML);
	return Ember.RSVP.resolve();
}

