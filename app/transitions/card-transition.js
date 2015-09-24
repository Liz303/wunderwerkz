import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";

export default function cardTransition() {
  var firstStep;
  var secondStep;
  var thirdStep;
  var frontCardElement = $(document.getElementById('front'));

    stop(this.oldElement);
    //-- OPTION ONE --//
//     this.oldElement.css('z-index', '10');
//     this.newElement.css({'z-index': '0', 'left': '-10px', 'top': '-10px', 'opacity': '1'});
//     this.newElement.find('#about-back').css('border', '3px solid white');

//     firstStep = animate(this.newElement, {left: ["-10px", "0px"], top: ["-10px", "0px"], opacity: [(1), 0]}, {duration: 1000});
//     secondStep =  animate(frontCardElement, {left: ["100%", "10px"]}, {duration: 1000});
//     thirdStep = animate(this.newElement, {left: ["0px", "-10px"], top: ["0px", "-10px"]}, {duration: 1000});
// // debugger;
//   return firstStep.then(() => {
//     $(document.getElementById('back')).css('opacity', 0);
//     $(document.getElementById('card-one')).css('opacity', 0);
//     $(document.getElementById('card-two')).css('opacity', 0);

//     return secondStep.then(() => {
//       $(document.getElementById('about-back')).css('border', '3px solid black');
//       return thirdStep.then(() => {
//         return;
//       });
//     });
//   });


//--OPTION TWO --/

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
    
//-- OPTION THREE-/

  // this.oldElement.addClass('old-transition');
  // this.newElement.addClass('new-transition');
  // this.newElement.find('#about-back').addClass('in-transition');


  //  firstStep =  animate(frontCardElement, {left: ["100%", "10px"]}, {duration: 1000});
  //  secondStep = animate(this.newElement, {left: ["0px", "-10px"], top: ["0px", "-10px"]}, {duration: 1000});

  // return firstStep.then(() => {

  //   $(document.getElementById('back')).addClass('clear');
  //   $(document.getElementById('card-one')).addClass('clear');
  //   $(document.getElementById('card-two')).addClass('clear');
  //   return secondStep.then(() => {

  //     $(document.getElementById('about-back')).removeClass('in-transition');  
  //      return;
  //   });
  // });

//- OPTION FOUR-//

// debugger;

  // this.oldElement.css('z-index', '10');
  // this.newElement.css({'z-index': '0', 'left': '-10px', 'top': '-10px'});
  // this.newElement.find('#about-back').addClass('in-transition');
  // debugger;
  // this.newElement.animate({'opacity': 1}, 1000, function() {
  //   debugger;
  //   $(document.getElementById('back')).css('opacity', 0);
  //   $(document.getElementById('card-one')).css('opacity', 0);
  //   $(document.getElementById('card-two')).css('opacity', 0);
  //   $(document.getElementById('front')).animate({'left': '100%'}, 1000, function() {
  //     debugger;
  //      $(document.getElementById('about-back')).removeClass('in-transition');
  //   });
  // });
   

}
