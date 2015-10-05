import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function cardTransition() {
  var firstStep;
  var secondStep;
  var thirdStep;
  var frontCardElement = $(document.getElementById('front'));

    stop(this.oldElement);
    this.oldElement.css('z-index', '10');
    this.newElement.css({'z-index': '0', 'left': '-10px', 'top': '-10px'});
    this.newElement.find('#about-back').addClass('in-transition');


  return animate(this.newElement, {opacity: [(1), 0]}, {duration: 1000}).then(() => {
    console.log('firststep complete');
    $(document.getElementById('back')).addClass('clear');
    $(document.getElementById('card-one')).addClass('clear');
    $(document.getElementById('card-two')).addClass('clear');
    debugger;
    return animate(frontCardElement, {left: ["100%", "10px"]}, {duration: 1000}).then(() => {
      console.log('secondStep complete');
      $(document.getElementById('about-back')).removeClass('in-transition');
      return animate(this.newElement, {left: ["0px", "-10px"], top: ["0px", "-10px"]}, {duration: 1000}).then(() => {
        console.log('thirdStep complete')
        return;
      });
    });
  });


}
