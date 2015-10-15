import Ember from 'ember';

export default Ember.Controller.extend({
	appName: "Wunder Werkz",
  actions: {
    transitionToTwo: function() {
      if (this.currentRouteName == "home"){
        this.transitionToRoute('about');
      } else if (this.currentRouteName == "about") {
        this.transitionToRoute('work');
      } else if (this.currentRouteName == "work") {
        this.transitionToRoute('contact');
      } else if (this.currentRouteName == "contact") {
        this.transitionToRoute('home');
      }
      this.set('hasTransitioned', true);
    },

    transitionToThree: function() {
      if (this.currentRouteName == "home"){
        this.transitionToRoute('work');
      } if (this.currentRouteName == "work" && this.get('hasTransitioned')) {
        this.transitionToRoute('contact');
      } if (this.currentRouteName == "contact" && this.get('hasTransitioned')) {
        this.transitionToRoute('home');
      }
    },

    transitionToFour: function() {
      if (this.currentRouteName == "home" && this.get('hasTransitioned')){
        this.transitionToRoute('about');
      } 
      if (this.currentRouteName == "contact" && this.get('hasTransitioned')) {
        this.transitionToRoute('home');
      }
      if (this.currentRouteName == "home") {
        this.transitionToRoute('contact');
      }
    },
  }
});
