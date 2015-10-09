import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function fadeOutNewCards() {
	return Ember.RSVP.hash({
  	cardTwo: this.newElement.find('.two').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	cardThree: this.newElement.find('.three').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	cardFour: this.newElement.find('.four').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	cardFive: this.oldElement.find('.four').css({'border-left': '3px solid white'}),
  	five: this.newElement.css({'left': '100%', 'opacity': 1, 'z-index': 600, 'visibility': 'visible'})
  }); 
}
