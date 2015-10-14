import Ember from 'ember';

export default Ember.Controller.extend({
  twoClicked: false,
  threeClicked: false,
  fourClicked: false,
  stopTransition: false, 

  observesClicks: function() {
      Ember.run.later((function() {
        if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') && this.get('stopTransition')){
          this.set('stopTransition', false);
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
        } else if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') ) {
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
           this.transitionToRoute('home');
        } else if (this.get('threeClicked') && this.get('fourClicked')) {
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
           this.transitionToRoute('about');
        } else if (this.get('fourClicked')) {
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
           this.transitionToRoute('work');
        }
      }.bind(this)), 100);
    
  }.observes('threeClicked', 'twoClicked', 'fourClicked', 'stopTransition'),

  actions: {
    transitionToTwo() {
      console.log('two');
      this.set('twoClicked', true);
    },
    transitionToThree() {
      this.set('threeClicked', true);
    },
    transitionToFour() {
      this.set('fourClicked', true);
    },
    dontTransition() {
      console.log('dont');
      this.set('stopTransition', true);
    }
  }
});
