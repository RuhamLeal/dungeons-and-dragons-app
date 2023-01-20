import Race from './Race';

export default class Elf extends Race {
  private maxHP: number;
  private static _elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHP = 99;
    Elf._elfInstances += 1;
  }

  get maxLifePoints(): number {
    return this.maxHP;
  }

  public static createdRacesInstances():number {
    return this._elfInstances;
  }
}