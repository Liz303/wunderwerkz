import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";

export default function fooBarTransition() {
	console.log('card off screen');
  return animate($('.one'), {left: '100%'});
}
