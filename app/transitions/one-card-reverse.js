import Ember from 'ember';
import slideCardsOut from './transitionOneReverse/slide-cards-out';
import fadeOutNewCards from './transitionOneReverse/fade-out-new-cards';
import slideCardIn from './transitionOneReverse/slide-card-in';
import fadeInNewCards from './transitionOneReverse/fade-in-new-cards';
import fadeOutOldCards from './transitionOneReverse/fade-out-old-cards';

export default function oneCardReverse() {
  return slideCardsOut.apply(this).then(() => {
    return fadeOutNewCards.apply(this).then(() => {
      return slideCardIn.apply(this).then(() => {
        return fadeInNewCards.apply(this).then(() => {
          return fadeOutOldCards.apply(this).then(() => {
            return Ember.RSVP.hash({
               textTwo: this.newElement.find('.two .sidebar-text').css('display', 'block'),
                textThree: this.newElement.find('.three .sidebar-text').css('display', 'block'),
                 textFour: this.newElement.find('.four .sidebar-text').css('display', 'block'),
            });
          });
        });
      });
    });
  });

}
