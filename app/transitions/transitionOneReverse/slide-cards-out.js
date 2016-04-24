import { animate } from "liquid-fire";

export default function slideCardsOut() {
  return animate(this.oldElement, {left: '-13px'});
}
