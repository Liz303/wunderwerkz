import Ember from 'ember';

export default Ember.Component.extend({
	click(){
		this.sendAction('transitionToTwo');
	}, 
	mouseEnter(event) {
		$('.two').removeClass('off');
		$('.three').removeClass('off');
		$('.four').removeClass('off');
	},
	mouseLeave(event) {
		$('.two').addClass('off');
		$('.three').addClass('off');
		$('.four').addClass('off');
	}
});
