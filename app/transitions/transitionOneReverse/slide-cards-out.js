import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function slideCardsOut() {
  return animate(this.oldElement, {left: '-13px'});
}
