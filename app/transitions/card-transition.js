import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";

export default function cardTransition() {
  var firstStep;
  var secondStep;
  var thirdStep;
  var frontCardElement = $(document.getElementById('front'));

    stop(this.oldElement);


    this.oldElement.css('z-index', '10');
    this.newElement.css({'z-index': '0', 'left': '-10px', 'top': '-10px'});
    this.newElement.find('#about-back').addClass('in-transition');

    firstStep = animate(this.newElement, {opacity: [(1), 0]}, {duration: 1000});
    secondStep =  animate(frontCardElement, {left: ["100%", "10px"]}, {duration: 1000});
    thirdStep = animate(this.newElement, {left: ["0px", "-10px"], top: ["0px", "-10px"]}, {duration: 1000});

  return firstStep.then(() => {
    $(document.getElementById('back')).addClass('clear');
    $(document.getElementById('card-one')).addClass('clear');
    $(document.getElementById('card-two')).addClass('clear');
    return secondStep.then(() => {
      $(document.getElementById('about-back')).removeClass('in-transition');
      return thirdStep.then(() => {
        return;
      });
    });
  });


}
