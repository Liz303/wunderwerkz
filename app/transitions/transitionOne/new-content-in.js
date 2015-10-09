import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function newContentIn() {
	 return animate(this.newElement, {opacity: 1});
}

