import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';

export default function slideCardIn() {
	var card = $('.one');

	card.css({left: '0', top: '0', 'z-index': 1});
  	return animate($('.one'), {left: '10px', top: '10px'});
}
