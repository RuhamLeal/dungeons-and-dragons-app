import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _mageInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._mageInstances += 1;
  }

  public get name():string {
    return this.name;
  }

  public get energyType() {
    return this._energyType;
  }

  public static createdArchetypeInstances():number {
    return this._mageInstances;
  }
}