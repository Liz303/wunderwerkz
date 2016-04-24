import Ember from 'ember';
import newContentIn from './transitionOne/new-content-in';
import cardOffScreen from './threeCardTransition/card-off-screen';
import slideCardsDown from './transitionOne/slide-cards-down';
import fadeOutOldCards from './threeCardTransition/fade-out-old-cards';
import newContentNoBorder from './threeCardTransition/new-content-no-border';

export default function threeCardTransition() {
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
