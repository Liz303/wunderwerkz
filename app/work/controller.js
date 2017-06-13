import Ember from 'ember';

export default Ember.Controller.extend({
  twoClicked: false,
  threeClicked: false,
  fourClicked: false,
  stopTransition: false,

  containerStyle: function() {
    let winHeight = Ember.$(window).height();
    let winWidth = Ember.$(window).width();
    let docuWidth = winWidth * 2;
    let docuHeight = winHeight * 1.5;
    return 'width:'+ docuWidth + 'px;' + 'height:' + docuHeight + 'px;';
  }.property(),

  observesClicks: function() {
    Ember.run.later((function() {
      if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') && this.get('stopTransition')){
          this.set('stopTransition', false);
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
      } else if (this.get('threeClicked') && this.get('twoClicked') && this.get('fourClicked') ) {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.transitionToRoute('contact');
        } else {
        Ember.$('.work-text').css('position', 'absolute');
        this.set('threeClicked', false);
        this.set('twoClicked', false);
        this.set('fourClicked', false);
        this.transitionToRoute('contact');
        }
      } else if (this.get('threeClicked') && this.get('fourClicked')) {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.transitionToRoute('contact');
        } else {
          Ember.$('.work-text').css('position', 'absolute');
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
          this.transitionToRoute('home');
        }
      } else if (this.get('fourClicked')) {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          this.transitionToRoute('contact');
        } else {
            Ember.$('.work-text').css('position', 'absolute');
          this.set('threeClicked', false);
          this.set('twoClicked', false);
          this.set('fourClicked', false);
          this.transitionToRoute('about');
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
    instaLink() {
      this.set('stopTransition', true);
      window.open("https://www.instagram.com/wunder_werkz/");
    },
    dontTransition() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('stop');
        this.set('stopTransition', true);
      }
    }
  }
});
