import Ember from 'ember';
import newContentIn from './transitionOne/new-content-in';
import cardOffScreen from './twoCardTransition/card-off-screen';
import slideCardsDown from './transitionOne/slide-cards-down';
import fadeOutOldCards from './twoCardTransition/fade-out-old-cards';
import newContentNoBorder from './twoCardTransition/new-content-no-border';

export default function twoCardTransition() {
  return newContentNoBorder.apply(this).then(() => {
    return newContentIn.apply(this).then(() => {
      return fadeOutOldCards.apply(this).then(() => {
        return cardOffScreen.apply(this).then(() => {
          return slideCardsDown.apply(this).then(() => {
            return Ember.RSVP.hash({
              one: this.newElement.css({'z-index': 'none'})
            });
          });
        });
      });
    });
  });
}
