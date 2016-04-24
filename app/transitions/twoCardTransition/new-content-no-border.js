import Ember from 'ember';

export default function newContentNoBorder() {
 	return Ember.RSVP.hash({
  	one: this.newElement.find('.four').css({'border-left': '3px solid white'}),
  	two: this.newElement.css({left: '-26px', width: '100%', 'z-index': 0})
  	});
}
