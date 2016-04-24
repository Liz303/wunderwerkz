import {animate } from "liquid-fire";

export default function cardOffScreen() {
  return animate(this.oldElement, {left: '100%'}, {duration: 1000});
}
