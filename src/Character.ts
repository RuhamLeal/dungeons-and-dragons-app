import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this.name, this._dexterity);
    this._archetype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      amount: getRandomInt(1, 10), 
      type_: this._archetype.energyType,
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    }; 
  }

  private levelUpMaxLifePoints(): number {
    const plusLifePoints = getRandomInt(2, 4);
    if ((this._maxLifePoints + plusLifePoints) > this._race.maxLifePoints) {
      return this._race.maxLifePoints;
    }
    return this._maxLifePoints + plusLifePoints;
  }

  private totalDamage(attackPoints:number):number {
    const damage = attackPoints - this._defense;
    if (damage > 0) return damage;
    return 1;
  }

  receiveDamage(damagePoints: number): number {
    const damage = this.totalDamage(damagePoints);
    
    this._lifePoints -= damage;

    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * getRandomInt(2, 3));
  }

  levelUp():void {
    this._dexterity += getRandomInt(1, 4);
    this._strength += getRandomInt(1, 3);
    this._defense += getRandomInt(1, 2);
    this._energy.amount = 10;
    this._maxLifePoints = this.levelUpMaxLifePoints();
    this._lifePoints = this._maxLifePoints;
  }
}
