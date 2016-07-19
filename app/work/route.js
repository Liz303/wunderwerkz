import Ember from 'ember';

export default Ember.Route.extend({
  imageArray: [],
  docHeight: 1024 * 2,
  docWidth: 1280 * 2,

  model() {
    let images = [
      { "name": "The Source",
        "file": "/images/Portfoliophotos/Common_Area_2.JPG" },
      { "name": "Freight Residences",
        "file": "/images/Portfoliophotos/freightresidencesgraphic.png" },
      { "name": "Card for Goldyn",
        "file": "/images/Portfoliophotos/goldyncard.png" },
      { "name": "Guilded Logo",
        "file": "/images/Portfoliophotos/guildedlogo.png" },
      { "name": "Source Hotel Collateral",
        "file": "/images/Portfoliophotos/hotelcollateral.png" },
      { "name": "Typefaces",
        "file": "/images/Portfoliophotos/letter_f.png" },
      { "name": "Design",
        "file": "/images/Portfoliophotos/look.png" },
      { "name": "Moment Ski",
        "file": "/images/Portfoliophotos/momentski.png" },
      { "name": "Oso Logo",
        "file": "/images/Portfoliophotos/osologo.png" },
      { "name": "Prism Waves Poster",
        "file": "/images/Portfoliophotos/prismwaves.png" },
      { "name": "Tarot Card",
        "file": "/images/Portfoliophotos/tarotCard.png" },
      { "name": "The Woods Logo",
        "file": "/images/Portfoliophotos/the_woods.png" },
      { "name": "The Source",
        "file": "/images/Portfoliophotos/the-source-denver-co.jpg" },
      { "name": "Waves Poster",
        "file": "/images/Portfoliophotos/wavesposter.png" },
      { "name": "Waves Zine Iceland",
        "file": "/images/Portfoliophotos/waveszine_iceland.png" },
      { "name": "Yatch Club Collateral",
        "file": "/images/Portfoliophotos/yatch_club.png" },
      { "name": "Proper Pour Graphic",
        "file": "/images/Portfoliophotos/yatchclubgraphic.png" },
      { "name": "Yatch Club Shirt Design",
        "file": "/images/Portfoliophotos/yatchclubshirt.png" },
    ];
    return images;
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    model.forEach(function(image, i){
      let imagePos = this.getImagePos();
      if (this.imageArray.length > 0) {
        let count = 0;
        while (this.checkForOverLap(imagePos) && count < 40) {
          count ++;
          imagePos = this.getImagePos();
        }
        this.imageArray.push(imagePos);
        image.position = 'left:' + imagePos.left.toString() + 'px;' + 'top:' + imagePos.top.toString() + 'px;';
      } else {
        this.imageArray.push(imagePos);
        image.position = 'left:' + imagePos.left.toString() + 'px;' + 'top:' + imagePos.top.toString() + 'px;';
      }
    }.bind(this));

  },

  getImagePos: function() {
    let top = this.generateNumber(this.docHeight, 1);
    let left = this.generateNumber(this.docWidth, 1);
    let arrayObj = {};
    arrayObj.top = top;
    arrayObj.left = left;
    return arrayObj;
  },

  checkForOverLap(imagePos) {
    for (var i=0; i < this.imageArray.length; i++) {
      let imageTop = this.imageArray[i].top;
      let imageLeft = this.imageArray[i].left;

      let inParentRangeTop = (imagePos.top >= imageTop) &&  (imagePos.top <= (imageTop + 300));
      let parentInRangeTop = (((imagePos.top + 300) >= imageTop) && ((imagePos.top + 300) <= (imageTop + 300)));
      let inParentRangeLeft = (imagePos.left >= imageLeft) &&  (imagePos.left <= (imageLeft + 300));
      let parentInRangeLeft = (((imagePos.left + 300) >= imageLeft) && ((imagePos.left + 300) <= (imageLeft + 300)));
      if ((inParentRangeTop || parentInRangeTop) && (inParentRangeLeft || parentInRangeLeft)) {
        return true;
      }
    }
    return false;
  },

  generateNumber: function(max, min) {
    return Math.floor(Math.random() * max) + min;
  }
});
