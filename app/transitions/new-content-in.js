import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function newContentIn() {
	$('.two').html(this.newElement[0].innerHTML);
	return Ember.RSVP.resolve();
}

