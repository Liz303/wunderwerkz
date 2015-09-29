import Ember from 'ember';

export default Ember.Controller.extend({
	appName: "Wunder Werkz",

  actions: {
    transitionToTwo: function() {
      if (this.currentRouteName == "home"){
        this.transitionToRoute('about');
      }
    },

    transitionToThree: function() {
      if (this.currentRouteName == "home"){
        this.transitionToRoute('work');
      }
    },

    transitionToFour: function() {
      if (this.currentRouteName == "home"){
        this.transitionToRoute('contact');
      }
    },
  }
});
