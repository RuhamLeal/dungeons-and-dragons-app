import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private playerOne: Fighter;
  private playerTwo: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  public fight(): number {
    while (this.playerOne.lifePoints > 0 && this.playerTwo.lifePoints > 0) {
      this.playerOne.attack(this.playerTwo);
      if (this.playerTwo.lifePoints < 0) break; 
      this.playerTwo.attack(this.playerOne);
    }
    return this.playerOne.lifePoints === -1 ? -1 : 1;
  }
}