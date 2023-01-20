import Race from './Race';

export default class Halfling extends Race {
  private maxHP: number;
  private static _halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHP = 60;
    Halfling._halflingInstances += 1;
  }

  get maxLifePoints(): number {
    return this.maxHP;
  }

  public static createdRacesInstances():number {
    return this._halflingInstances;
  }
}