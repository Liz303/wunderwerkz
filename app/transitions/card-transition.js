import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";

export default function fade(opts={}) {
  var firstStep;
  var secondStep;
  var thirdStep;
  var fourthStep;
  var fifthStep;
  var sixthStep;
  var outOpts = opts;
  var frontCardElement = $(document.getElementById('front'));
  var backCard = $(document.getElementById('back'));
  var cardTwo = $(document.getElementById('card-two'));
  var cardOne = $(document.getElementById('card-one'));
  var fadingElement = findFadingElement(this);
  if (fadingElement) {
    // We still have some older version that is in the process of
    // fading out, so out first step is waiting for it to finish.
    // firstStep = finish(fadingElement, 'fade-out');
  } else {
    if (isAnimating(this.oldElement, 'fade-in')) {
      // if the previous view is partially faded in, scale its
      // fade-out duration appropriately.
      outOpts = { duration: timeSpent(this.oldElement, 'fade-in') };
    }
    // stop(this.oldElement);
    this.oldElement.css('z-index', '10');
    this.newElement.css('z-index', '0');
    this.newElement.find('#back').css('border', '3px solid white');

    // firstStep = animate(this.newElement, {left: ["-10px", "0px"], top: ["-10px", "0px"]}, {duration: 1000});
    // secondStep = animate(this.newElement, {opacity: [(opts.maxOpacity || 1), 0]}, {duration: 1000}, 'fade-in');
    // thirdStep = animate(backCard, {opacity: [(opts.minOpacity || 0), 1]}, {duration: 1000}, 'fade-out');
    // fourthStep = animate(frontCardElement, {left: ["100%", "10px"]}, {duration: 1000});
    // fifthStep = animate(this.newElement, {left: ["0px", "-10px"], top: ["0px", "-10px"]}, {duration: 1000});
    //secondStep = animate(this.oldElement, {opacity: 0}, outOpts, 'fade-out');
    firstStep = animate(this.newElement, {left: ["-10px", "0px"], top: ["-10px", "0px"], opacity: [(opts.maxOpacity || 1), 0]}, {duration: 1000});
    // secondStep = animate(this.newElement, {opacity: [(opts.maxOpacity || 1), 0]}, {duration: 1000}, 'fade-in');
    thirdStep =  animate(frontCardElement, {left: ["100%", "10px"]}, {duration: 1000});
    fourthStep = animate(this.newElement, {left: ["0px", "-10px"], top: ["0px", "-10px"]}, {duration: 1000});
  }

  return firstStep.then(() => {
    $(document.getElementById('back')).css('opacity', 0);
    $(document.getElementById('card-one')).css('opacity', 0);
    $(document.getElementById('card-two')).css('opacity', 0);
    // return secondStep.then(() => {
      return thirdStep.then(() => {
        return fourthStep.then(() => {
            return
          });
            
     
       });
    // });
   });
  // if (this.oldElement.find('.front-card').is(':animated')) {

  // } else {
  //   return secondStep.then(() => {
  //     return animate(this.newElement, {opacity: [(opts.maxOpacity || 1), 0]}, opts, 'fade-in');
  //   });
  // }

}

function findFadingElement(context) {
  for (var i = 0; i < context.older.length; i++) {
    var entry = context.older[i];
    if (isAnimating(entry.element, 'fade-out')) {
      return entry.element;
    }
  }
  if (isAnimating(context.oldElement, 'fade-out')) {
    return context.oldElement;
  }
}
