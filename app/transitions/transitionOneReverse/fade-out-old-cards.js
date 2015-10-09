import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function fadeOutOldCards() {
  return animate(this.oldElement, {opacity: 0});
}
