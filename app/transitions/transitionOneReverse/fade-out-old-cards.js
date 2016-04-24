import { animate } from "liquid-fire";

export default function fadeOutOldCards() {
  return animate(this.oldElement, {opacity: 0});
}
