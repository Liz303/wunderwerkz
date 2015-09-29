import Ember from 'ember';

export default Ember.Component.extend({
	click(){
		this.sendAction('transitionToFour');
	},
	mouseEnter(event) {
		$('.four').removeClass('off');
	},
	mouseLeave(event) {
		$('.four').addClass('off');
	}
});
