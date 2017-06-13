import Ember from 'ember';

export default Ember.Route.extend({
  imageArray: [],
  // docWidth: $(window).width() * 2,
  // docHeight: $(window).height() * 1.5,
  docHeight: 1024 * 2,
  docWidth: 1280 * 2,

  model() {
    let images = [
      { "name": "Ass Poster",
        "file": "/images/Portfoliophotos/assposter.jpg" },
      { "name": "Bun Bun",
        "file": "/images/Portfoliophotos/bunbun-01.png" },
      { "name": "The Source Common Area",
        "file": "/images/Portfoliophotos/Common_Area_2.JPG" },
      { "name": "Cuba Typeface",
        "file": "/images/Portfoliophotos/cuba.png" },
      { "name": "Downtown 82",
        "file": "/images/Portfoliophotos/dt82_1.jpg" },
      { "name": "Source Hotel Collateral",
        "file": "/images/Portfoliophotos/hotelcollateral.png" },
      { "name": "Geotherapy",
        "file": "/images/Portfoliophotos/geotherapy.jpg" },
      { "name": "Goldyn Poster",
        "file": "/images/Portfoliophotos/goldyn_aftershockposter.jpg" },
      { "name": "Guilded Logo",
        "file": "/images/Portfoliophotos/guildedlogo.png" },
      { "name": "Halloween Typeface",
        "file": "/images/Portfoliophotos/halloween.jpg" },
      { "name": "Prism Waves Poster",
        "file": "/images/Portfoliophotos/prismwaves.png" },
      { "name": "Oso Matress",
        "file": "/images/Portfoliophotos/osoimage.jpg" },
      { "name": "The Woods Logo",
        "file": "/images/Portfoliophotos/the_woods.png" },
      { "name": "Red Typeface",
        "file": "/images/Portfoliophotos/red_ip-01.png" },
      { "name": "Drive 2 interior",
        "file": "/images/Portfoliophotos/Drive2.jpg" },
      { "name": "Freight",
        "file": "/images/Portfoliophotos/Freight.jpg" },
      { "name": "Proper Pour Graphic",
        "file": "/images/Portfoliophotos/ProperPourGraphic.jpg" },
      { "name": "The Source",
        "file": "/images/Portfoliophotos/thesource.jpg"},
      { "name": "Waves Spread",
        "file": "/images/Portfoliophotos/WW_portfolio_wavesnorth_spread.jpg"},
      { "name": "Yatch Club Shirt Design",
        "file": "/images/Portfoliophotos/yatchclubshirt.png" },
    ];
    return images;
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    model.forEach(function(image){
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
