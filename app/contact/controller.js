import Ember from 'ember';

export default Ember.Controller.extend({
  twoClicked: false,
  threeClicked: false,
  fourClicked: false,

  observesClicks: function() {
    Ember.run.later((function() {
    if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') ) {
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
  }.observes('threeClicked', 'twoClicked', 'fourClicked'),

  actions: {
    transitionToTwo() {
      this.set('twoClicked', true);
    },
    transitionToThree() {
      this.set('threeClicked', true);
    },
    transitionToFour() {
      this.set('fourClicked', true);
    },
  }
});
