import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function cardOffScreen() {
  return animate(this.oldElement, {left: '100%'}, {duration: 1000});
}
