import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function fadeInNewCards() {
	return Ember.RSVP.hash({
  	cardTwo: this.newElement.find('.two').css({'background': 'white', 'border-left': '3px solid black'}),
  	cardThree: this.newElement.find('.three').css({'background': 'white', 'border-left': '3px solid black'}),
  	cardFour: this.newElement.find('.four').css({'background': 'white', 'border-left': '3px solid black'})
  }); 
}
