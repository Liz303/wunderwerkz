import Ember from 'ember';

export default Ember.Controller.extend({
  workClicked: false,
  aboutClicked: false,
  contactClicked: false,

  observesWork: function() {
    var _this = this;
    Ember.run.later((function() {

    if (_this.get('workClicked') && _this.get('aboutClicked') && _this.get('contactClicked') ) {
      console.log('go to about');
      _this.set('workClicked', false);
      _this.set('aboutClicked', false);
      _this.set('contactClicked', false);
       _this.transitionToRoute('about');
    } else if (_this.get('workClicked') && _this.get('contactClicked')) {
      console.log('go to work');
      _this.set('workClicked', false);
      _this.set('aboutClicked', false);
      _this.set('contactClicked', false);
       _this.transitionToRoute('work');
    } else if (_this.get('contactClicked')) {
      console.log('go to contact');
      _this.set('workClicked', false);
      _this.set('aboutClicked', false);
      _this.set('contactClicked', false);
       _this.transitionToRoute('contact');
    }
    }), 100);
  }.observes('workClicked', 'aboutClicked', 'contactClicked'),

  actions: {
    transitionToWork: function() {
      this.set('workClicked', true);
      console.log('work');
    },

    transitionToAbout: function() {
        this.set('aboutClicked', true);
      console.log('about');
    },

    transitionToContact: function() {
        this.set('contactClicked', true);
      console.log('contact');
    },
  }
});
