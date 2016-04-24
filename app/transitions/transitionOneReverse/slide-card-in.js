import { animate } from "liquid-fire";

export default function slideCardsIn() {
  return animate(this.newElement, {left: '0px'});
}
