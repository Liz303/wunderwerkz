import Ember from 'ember';

export default function fadeOutOldCards() {
	console.log('transisiotn')
	return Ember.RSVP.hash({
  	cardThree: this.oldElement.find('.three').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	cardFour: this.oldElement.find('.four').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	text: this.oldElement.find('.sidebar-text').css('display', 'none'),
		text: this.oldElement.find('h2').css('display', 'none')
  });
}
