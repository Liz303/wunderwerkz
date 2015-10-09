import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function newContentNoBorder() {
 	return Ember.RSVP.hash({
  	one: this.newElement.find('.four').css({'border-left': '3px solid white'}),
  	two: this.newElement.css({left: '-13px', width: '100%'})
  	});
}
