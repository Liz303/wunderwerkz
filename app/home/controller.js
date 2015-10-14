import Ember from 'ember';

export default Ember.Controller.extend({
  twoClicked: false,
  threeClicked: false,
  fourClicked: false,
  polyClicked: false,

  observesClicks: function() {
    Ember.run.later((function() {
      if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') && this.get('polyClicked') ) {
        this.set('threeClicked', false);
        this.set('twoClicked', false);
        this.set('fourClicked', false);
        this.set('polyClicked', false);
        if ($('.home.one').hasClass('z-hover')) {   
          $('.home.one').removeClass('z-hover');
        } else {
          $('.home.one').addClass('z-hover');
        }
    } else if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') ) {
      this.set('threeClicked', false);
      this.set('twoClicked', false);
      this.set('fourClicked', false);
       this.transitionToRoute('about');
    } else if (this.get('threeClicked') && this.get('fourClicked')) {
      this.set('threeClicked', false);
      this.set('twoClicked', false);
      this.set('fourClicked', false);
       this.transitionToRoute('work');
    } else if (this.get('fourClicked')) {
      this.set('threeClicked', false);
      this.set('twoClicked', false);
      this.set('fourClicked', false);
       this.transitionToRoute('contact');
    }
    }.bind(this)), 100);
  }.observes('threeClicked', 'twoClicked', 'fourClicked', 'polyClicked'),

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

    polyClick() {
      console.log('poly click');
      this.set('polyClicked', true);
    }
  }
});
