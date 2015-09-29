import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";

export default function slideCardsDown() {
	console.log('slide card down');
  return Ember.RSVP.hash({
  	cardTwo: animate($('.two'), {top: "+=10", left: "+=10"}),
  	cardThree: animate($('.three'), {top: "+=10", left: "+=10"}),
  	cardFour: animate($('.four'), {top: "+=10", left: "+=10"})
  }); 
}