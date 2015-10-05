import Ember from 'ember';

export default Ember.Component.extend({
	click(){
		this.sendAction('transitionToFour');
		console.log('click four');
	},
	mouseEnter(event) {
		$('.four').removeClass('off');
	},
	mouseLeave(event) {
		$('.four').addClass('off');
	}
});
