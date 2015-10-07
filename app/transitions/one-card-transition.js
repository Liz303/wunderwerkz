import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';
import newContentIn from './transitionOne/new-content-in';
import cardOffScreen from './transitionOne/card-off-screen';
import slideCardsDown from './transitionOne/slide-cards-down';
import fadeOutOldCards from './transitionOne/fade-out-old-cards';
import newContentNoBorder from './transitionOne/new-content-no-border';

export default function oneCardTransition() {
  var oldElement = this.oldElement;

  return newContentNoBorder.apply(this).then(() => {
    return newContentIn.apply(this).then(() => {
      return fadeOutOldCards.apply(this).then(() => {  
        return cardOffScreen.apply(this).then(() => {   
          // this.newElement.find('.four').css({'border-top': '3px solid black', 'border-left': '3px solid black'});
          return slideCardsDown.apply(this).then(() => {
            return Ember.RSVP.resolve();
          });
        });
      });
    });
  });
}
