import Ember from 'ember';

export default function fadeOutNewCards() {
	return Ember.RSVP.hash({
  	cardTwo: this.newElement.find('.two').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	textTwo: this.newElement.find('.two .sidebar-text').css('display', 'none'),
  	cardThree: this.newElement.find('.three').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	textThree: this.newElement.find('.three .sidebar-text').css('display', 'none'),
  	cardFour: this.newElement.find('.four').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	textFour: this.newElement.find('.four .sidebar-text').css('display', 'none'),
  	cardFive: this.oldElement.find('.four').css({'border-left': '3px solid white'}),
  	five: this.newElement.css({'left': '100%', 'opacity': 1, 'z-index': 600, 'visibility': 'visible'})
  });
}
