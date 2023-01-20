import Race from './Race';

export default class Dwarf extends Race {
  private maxHP: number;
  private static _dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHP = 80;
    Dwarf._dwarfInstances += 1;
  }

  get maxLifePoints(): number {
    return this.maxHP;
  }

  public static createdRacesInstances():number {
    return this._dwarfInstances;
  }
}