import Ember from 'ember';

export default Ember.Component.extend({
	click(){
		this.sendAction('transitionToTwo');
	}, 
	mouseEnter(event) {
		$('.one').removeClass('off');
		$('.two').removeClass('off');
		$('.three').removeClass('off');
		$('.four').removeClass('off');
	},
	mouseLeave(event) {
		$('.one').addClass('off');
		$('.two').addClass('off');
		$('.three').addClass('off');
		$('.four').addClass('off');
	}
});
