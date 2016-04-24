import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  twoClicked: false,
  threeClicked: false,
  fourClicked: false,
  polyClicked: false,
  stopTransition: false,

  observesClicks: function() {
    Ember.run.later((function() {
      if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') && this.get('stopTransition')){
        this.set('threeClicked', false);
        this.set('twoClicked', false);
        this.set('fourClicked', false);
        this.set('stopTransition', false);
      } else if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') && this.get('polyClicked') ) {
        this.set('threeClicked', false);
        this.set('twoClicked', false);
        this.set('fourClicked', false);
        this.set('polyClicked', false);
        if ($('.home.one').hasClass('z-hover-two')) {
          $('.home.one').removeClass('z-hover-two');
        } else {
          $('.home.one').addClass('z-hover-two');
        }
      } else if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') ) {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.transitionToRoute('about');
        } else {
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
          this.transitionToRoute('about');
        }
      } else if (this.get('threeClicked') && this.get('fourClicked')) {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.transitionToRoute('about');
        } else {
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
          this.transitionToRoute('work');
        }
      } else if (this.get('fourClicked')) {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.transitionToRoute('about');
        } else {
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
          this.transitionToRoute('contact');
        }
      }
    }.bind(this)), 100);
  }.observes('threeClicked', 'twoClicked', 'fourClicked', 'polyClicked', 'dontTransition'),

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
      this.set('polyClicked', true);
    },
    dontTransition() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.set('stopTransition', true);
      }
    }
  }
});
