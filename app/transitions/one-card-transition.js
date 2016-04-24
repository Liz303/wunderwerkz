import Ember from 'ember';
import newContentIn from './transitionOne/new-content-in';
import cardOffScreen from './transitionOne/card-off-screen';
import slideCardsDown from './transitionOne/slide-cards-down';
import fadeOutOldCards from './transitionOne/fade-out-old-cards';
import newContentNoBorder from './transitionOne/new-content-no-border';

export default function oneCardTransition() {
  return newContentNoBorder.apply(this).then(() => {
    return newContentIn.apply(this).then(() => {
      return fadeOutOldCards.apply(this).then(() => {
        return cardOffScreen.apply(this).then(() => {
          return slideCardsDown.apply(this).then(() => {
            return Ember.RSVP.resolve();
          });
        });
      });
    });
  });
}
