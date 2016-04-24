import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('about', function() {
    this.route('about-text');
  });
  this.route('contact');
  this.route('work');
});

export default Router;
