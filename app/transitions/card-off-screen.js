import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function fooBarTransition() {
	console.log('card off screen');
  return animate($('.one'), {left: '100%'});
}
