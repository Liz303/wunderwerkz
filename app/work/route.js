import Ember from 'ember';

export default Ember.Route.extend({
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
  }
});
