import Ember from 'ember';

export default Ember.Controller.extend({
  twoClicked: false,
  threeClicked: false,
  fourClicked: false,
  stopTransition: false,

  observesClicks: function() {
    Ember.run.later((function() {
    if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') && this.get('stopTransition')){
        this.set('threeClicked', false);
        this.set('twoClicked', false);
        this.set('fourClicked', false);
        this.set('stopTransition', false);
    } else if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') ) {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.transitionToRoute('work');
      } else {
        this.set('threeClicked', false);
        this.set('twoClicked', false);
        this.set('fourClicked', false);
        this.transitionToRoute('work');
      }
    } else if (this.get('threeClicked') && this.get('fourClicked')) {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.transitionToRoute('work');
      } else {
        this.set('threeClicked', false);
        this.set('twoClicked', false);
        this.set('fourClicked', false);
        this.transitionToRoute('contact');
      }
    } else if (this.get('fourClicked')) {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.transitionToRoute('work');
      } else {
        this.set('threeClicked', false);
        this.set('twoClicked', false);
        this.set('fourClicked', false);
        this.transitionToRoute('home');
      }
    }
    }.bind(this)), 100);
  }.observes('threeClicked', 'twoClicked', 'fourClicked', 'dontTransition'),

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
    dontTransition() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.set('stopTransition', true);
      }
    },
    zineLink() {
      this.set('stopTransition', true);
      window.open("https://www.etsy.com/shop/WavesZine");
    },
    downloadClick() {
      this.set('stopTransition', true);
      window.open('../images/Wunderwerkz_capabilities.pdf');
    }
  }
});
