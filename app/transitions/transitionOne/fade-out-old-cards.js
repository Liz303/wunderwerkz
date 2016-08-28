import Ember from 'ember';

export default function fadeOutOldCards() {
	return Ember.RSVP.hash({
  	cardTwo: this.oldElement.find('.two').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	cardThree: this.oldElement.find('.three').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	cardFour: this.oldElement.find('.four').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	text: this.oldElement.find('.sidebar-text').css('display', 'none'),
		h2: this.oldElement.find('h2').css('display', 'none')
  });
}
