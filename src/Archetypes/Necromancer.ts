import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _necromancerInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._necromancerInstances += 1;
  }

  public get name():string {
    return this.name;
  }

  public get energyType() {
    return this._energyType;
  }

  public static createdArchetypeInstances():number {
    return this._necromancerInstances;
  }
}