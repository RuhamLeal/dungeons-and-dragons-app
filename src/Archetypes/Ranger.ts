import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _rangerInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._rangerInstances += 1;
  }

  public get name():string {
    return this.name;
  }

  public get energyType() {
    return this._energyType;
  }

  public static createdArchetypeInstances():number {
    return this._rangerInstances;
  }
}