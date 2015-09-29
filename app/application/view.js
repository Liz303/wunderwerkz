import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement(){
		console.log('did insert element');
		var container = $('.content .liquid-child');
		var initialContent = container.html();

		$('.one').html(initialContent);
		debugger;
		container.html('');
	}

});
