import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';
import newContentIn from './new-content-in';
import cardOffScreen from './card-off-screen';
import slideCardsDown from './slide-cards-down';
import slideCardIn from './slide-card-in';

export default function oneCardTransition() {
  var oldElement = this.oldElement;
  return newContentIn.apply(this).then(() => {
      return cardOffScreen().then(() => {
      return slideCardsDown().then(() => {
        return slideCardIn().then(() => {
          $('.one').html('');
          $('.card.one').removeClass('one').addClass('back');
          $('.card.two').removeClass('two').addClass('one');
          $('.card.three').removeClass('three').addClass('two');
          $('.card.four').removeClass('four').removeClass('back').addClass('three');
          $('.card.back').addClass('four');

          return Ember.RSVP.resolve();
        });
      });
    });
  });
  

}
