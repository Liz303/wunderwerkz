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
          // this.transitionToRoute('home');
        } else if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') ) {
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.transitionToRoute('home');
          } else {
              this.set('threeClicked', false);
              this.set('twoClicked', false);
              this.set('fourClicked', false);
             this.transitionToRoute('home');
          }
        } else if (this.get('threeClicked') && this.get('fourClicked')) {
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.transitionToRoute('home');
          } else {
            this.set('threeClicked', false);
            this.set('twoClicked', false);
            this.set('fourClicked', false);
            this.transitionToRoute('about');
         }
        } else if (this.get('fourClicked')) {
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.transitionToRoute('home');
          } else {
            this.set('threeClicked', false);
            this.set('twoClicked', false);
            this.set('fourClicked', false);
            this.transitionToRoute('work');
          }
        }
      }.bind(this)), 100);

  }.observes('threeClicked', 'twoClicked', 'fourClicked', 'stopTransition'),

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
      this.set('stopTransition', true);
    },
    mapLink() {
      this.set('stopTransition', true);
      window.open("https://www.google.com/maps/place/3515+Ringsby+Ct+%23201,+Denver,+CO+80216/@39.768559,-104.9817705,17z/data=!3m1!4b1!4m2!3m1!1s0x876c791b598178bb:0x96b114122dab0cde");
    },
    instaLink() {
      this.set('stopTransition', true);
      window.open("https://www.instagram.com/wunder_werkz");
    },
    facebookLink() {
      this.set('stopTransition', true);
      window.opwn("https://www.facebook.com/wunderwerkz");
    },
    emailLink() {
      this.set('stopTransition', true);
      window.location.href = "mailto:jon@iheartwunderwerkz.com";
    }
  }
});
