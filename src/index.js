import "babel-polyfill";
import { Fighter } from "./fighter.js";
import { ImprovedFighter } from "./improvedFighter.js";
import { fight } from "./fight.js";

// create two instances
var fighter = new Fighter("Fighter", 100, 2);
var improvedFighter = new ImprovedFighter("improvedFighter", 100, 3);
// call fight function
fight(fighter, improvedFighter, 10, 10, 10);
