import Ember from 'ember';

export default function fadeOutOldCards() {
	return Ember.RSVP.hash({
  	cardFour: this.oldElement.find('.four').css({'background': 'transparent', 'border-left': '3px solid transparent'}),
  	text: this.oldElement.find('.sidebar-text').css('display', 'none')
  });
}
