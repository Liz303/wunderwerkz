import Ember from 'ember';
import InstagramCollection from './models/instagram-collection';

export default Ember.Route.extend({
  model() {
    let id = '33185b999a9546d6b9ae3d825e26f58b';
    return InstagramCollection.find(id);
  }
});