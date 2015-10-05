import Ember from 'ember';

export default Ember.Controller.extend({
	appName: "Wunder Werkz",

  actions: {
    transitionToTwo: function() {
      debugger;
      if (this.currentRouteName == "home"){
        this.transitionToRoute('about');
      } else if (this.currentRouteName == "about") {
        this.transitionToRoute('work');
      } else if (this.currentRouteName == "work") {
        this.transitionToRoute('contact');
      } else if (this.currentRouteName == "contact") {
        this.transitionToRoute('home');
      }
    },

    transitionToThree: function() {
      debugger;
      if (this.currentRouteName == "home"){
        this.transitionToRoute('work');
      }
    },

    transitionToFour: function() {
      debugger;
      if (this.currentRouteName == "home"){
        this.transitionToRoute('contact');
      }
    },
  }
});
