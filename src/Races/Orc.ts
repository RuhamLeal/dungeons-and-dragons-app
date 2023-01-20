import Race from './Race';

export default class Orc extends Race {
  private maxHP: number;
  private static _orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHP = 74;
    Orc._orcInstances += 1;
  }

  get maxLifePoints(): number {
    return this.maxHP;
  }

  public static createdRacesInstances():number {
    return this._orcInstances;
  }
}