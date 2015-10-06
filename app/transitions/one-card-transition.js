import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';
import newContentIn from './new-content-in';
import cardOffScreen from './card-off-screen';
import slideCardsDown from './slide-cards-down';
import slideCardIn from './slide-card-in';
import newContentLeft from './new-content-left';
import fadeOutOldCards from './fade-out-old-cards';
import newContentNoBorder from './new-content-no-border';

export default function oneCardTransition() {
  var oldElement = this.oldElement;

  return newContentNoBorder.apply(this).then(() => {
    return newContentIn.apply(this).then(() => {
      return fadeOutOldCards.apply(this).then(() => {
        return cardOffScreen.apply(this).then(() => {
          this.newElement.find('.four').css('border', '3px solid black');
          return slideCardsDown.apply(this).then(() => {
            return Ember.RSVP.resolve();
          });
        });
      });
    });
  });
  

  // return newContentIn.apply(this).then(() => {
  //     return cardOffScreen().then(() => {
  //     return slideCardsDown().then(() => {
  //       return slideCardIn().then(() => {
  //         $('.one').html('');
  //         $('.card.one').removeClass('one').addClass('back');
  //         $('.card.two').removeClass('two').addClass('one').css('z-index', 400);
  //         $('.card.three').removeClass('three').addClass('two');
  //         $('.card.four').removeClass('four').removeClass('back').addClass('three');
  //         $('.card.back').addClass('four');

  //         return Ember.RSVP.resolve();
  //       });
  //     });
  //   });
  // });
  

}
