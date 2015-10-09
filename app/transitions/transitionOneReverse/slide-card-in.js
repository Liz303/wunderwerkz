import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function slideCardsIn() {
  return animate(this.newElement, {left: '0px'});
}
