import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		toAbout: function() {
			this.transitionTo('about');
		},
		toHome: function() {
			this.transitionTo('home');
		}
	}
});
