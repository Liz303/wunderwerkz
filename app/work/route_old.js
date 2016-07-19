import Ember from 'ember';

export default Ember.Route.extend({
  imageArray: [],
  docHeight: $(window).height() * 2,
  docWidth: $(window).width() * 2,

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
      let arrayObj = this.getImagePos();
      this.imageArray.push(arrayObj);
      image.position = 'left:' + arrayObj.left.toString() + 'px;' + 'top:' + arrayObj.top.toString() + 'px;';
      // console.log(arrayObj);
    }.bind(this));

  },

  getImagePos: function() {
    let top = this.generateNumber(this.docHeight, 1);
    let left = this.generateNumber(this.docWidth, 1);
    let arrayObj = {};
    arrayObj.top = top;
    arrayObj.left = left;
    console.log('get image position: { ' + top + ', ' + left + '}');
    for (var i=0; i < this.imageArray.length; i++) {
      var imageTop = this.imageArray[i].top;
      var imageLeft = this.imageArray[i].left;
      let overlap = this.checkForOverLap(top, imageTop, left, imageLeft);
      console.log('overlap: ', overlap);
      while ( this.checkForOverLap(top, imageTop, left, imageLeft) ) {
        console.log('in whilte');
        left = this.generateNumber(this.docWidth, 1);
        console.log('new left : { ' + top + ', ' + left + '}');
      }
      arrayObj.left = left;
      console.log('this is what is put in the array: ', arrayObj);
      return arrayObj;
      // if ( overlap ) {
      //     left = left + 350;
      //     top = top + 350;
      //     arrayObj.left = left;
      //     console.log('updated pos ', arrayObj)
      //     let overlap = this.checkForOverLap(top, imageTop, left, imageLeft);
      //     if ( overlap ) {
      //       left = left + 350;
      //       top = top + 350;
      //       arrayObj.left = left;
      //       return arrayObj;
      //     }
      //     console.log('overlap',overlap);
      //     return arrayObj;
      // }
    }
    console.log('this is what is put in the array: ', arrayObj);
    return arrayObj;
  },

  checkForOverLap(top, imageTop, left, imageLeft) {
    let inParentRangeTop = (top >= imageTop) &&  (top <= (imageTop + 300));
    let parentInRangeTop = (((top + 300) >= imageTop) && ((top + 300) <= (imageTop + 300)));
    let inParentRangeLeft = (left >= imageLeft) &&  (left <= (imageLeft + 300));
    let parentInRangeLeft = (((left + 300) >= imageLeft) && ((left + 300) <= (imageLeft + 300)));
    debugger;
    if ((inParentRangeTop || parentInRangeTop) && (inParentRangeLeft || parentInRangeLeft)) {
      return true;
    } else {
      return false;
    }
  },

  generateNumber: function(max, min) {
    return Math.floor(Math.random() * max) + min;
  }
});
