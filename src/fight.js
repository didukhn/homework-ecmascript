import { Fighter } from "./fighter.js";
import { ImprovedFighter } from "./improvedFighter.js";

// create async function fight
export async function fight(fighter, improvedFighter, ...points) {
  let i = 0;
  while (
    fighter.health >= 0 &&
    improvedFighter.health >= 0 &&
    i < points.length
  ) {
    fighter.hit(improvedFighter, points[i]);
    improvedFighter.doubleHit(fighter, points[i]);
    ++i;
  }

  if (fighter.health <= 0) {
    console.log("user in knockout");
    let promise = fighter.knockout();
    await promise.then(result => {
      console.log("winner is" + improvedFighter.name + "!!!");
    });
  } else if (improvedFighter.health <= 0) {
    console.log("user in knockout");
    let promise = improvedFighter.knockout();
    await promise.then(result => {
      console.log("winner is" + fighter.name + "!!!");
    });
  } else {
    console.log("Both are alive :(");
  }
}
