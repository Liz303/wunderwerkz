import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';
import slideCardsOut from './transitionOneReverse/slide-cards-out';
import fadeOutNewCards from './transitionOneReverse/fade-out-new-cards';
import slideCardIn from './transitionOneReverse/slide-card-in';
import fadeInNewCards from './transitionOneReverse/fade-in-new-cards';
import fadeOutOldCards from './transitionOneReverse/fade-out-old-cards';

export default function oneCardReverse() {
  var oldElement = this.oldElement;
console.log('one card Reverse');
  return slideCardsOut.apply(this).then(() => {
    debugger;
    return fadeOutNewCards.apply(this).then(() => {
      debugger;
      return slideCardIn.apply(this).then(() => {
        debugger;
        return fadeInNewCards.apply(this).then(() => {
          debugger;
          return fadeOutOldCards.apply(this).then(() => {
            debugger;
            return Ember.RSVP.resolve();
          });
        });
      });
    });
  });

}
