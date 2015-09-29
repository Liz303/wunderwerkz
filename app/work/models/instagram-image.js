import Ember from 'ember';

export default Ember.Object.extend({
  _imageData: null,

  images: Ember.computed.alias('_imageData.images'),
  standard: Ember.computed.alias('images.standard_resolution'),
  caption: Ember.computed.alias('_imageData.caption.text')
});
