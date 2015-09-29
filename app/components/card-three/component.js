import Ember from 'ember';

export default Ember.Component.extend({
	click(){
		this.sendAction('transitionToThree');
	}, 
	mouseEnter(event) {
		$('.three').removeClass('off');
		$('.four').removeClass('off');
	},
	mouseLeave(event) {
		$('.three').addClass('off');
		$('.four').addClass('off');
	}
});
