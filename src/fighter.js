// Create class Fighter
export class Fighter {
  constructor(name, health, power) {
    this._name = name;
    this._health = health;
    this._power = power;
  }

  get health() {
    return this._health;
  }
  set health(value) {
    this._health = value;
  }

  get name() {
    return this._name;
  }

  get power() {
    return this._power;
  }

  setDamage(damage) {
    this.health = this.health - damage;
    console.log(this.name, " health: ", this.health);
  }

  hit(enemy, point) {
    let damage = 0;
    damage = point * this.power;
    enemy.setDamage(damage);
  }

  knockout() {
    return new Promise((resolve, reject) => {
      console.log("time is over");
      setTimeout(() => {
        resolve("resolved");
      }, 500);
    });
  }
}
