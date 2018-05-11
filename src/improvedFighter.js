import { Fighter } from "./fighter.js";

// Create class ImprovedFighter
export class ImprovedFighter extends Fighter {
  constructor(name, health, power) {
    super(name, health, power);
  }

  doubleHit(enemy, point) {
    let doubleDamage = 0;
    doubleDamage = 2 * point;
    this.hit(enemy, doubleDamage);
  }
}
