import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _warriorInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._warriorInstances += 1;
  }

  public get name():string {
    return this.name;
  }

  public get energyType() {
    return this._energyType;
  }

  public static createdArchetypeInstances():number {
    return this._warriorInstances;
  }
}