import Ember from 'ember';
import InstagramImage from './instagram-image';

let InstagramCollection = Ember.Object.extend({
  _response: null,

  images: Ember.computed('_response', function() {
    let response = this.get('_response');
    let images = Ember.A(response.data);
    return images.map(image => InstagramImage.create({ _imageData: image }));
  })

});

InstagramCollection.reopenClass({
  find(id) {
    let type = 'GET';
    let url = `https://api.instagram.com/v1/users/1960488449/media/recent/?client_id=${id}`;
    let dataType = 'jsonp';
    let cache = false;
    let promise;

    promise = Ember.$.ajax({ type, url, dataType, cache });

    return promise.then(response => {
      return InstagramCollection.create({ _response: response });
    });
  }
});

export default InstagramCollection;
