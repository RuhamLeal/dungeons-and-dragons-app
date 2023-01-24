import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _mainPlayer: Fighter;
  private _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._mainPlayer = player;
    this._enemies = enemies;
  }

  private combat(enemie: SimpleFighter): boolean {
    while (this._mainPlayer.lifePoints > 0 && enemie.lifePoints > 0) {
      this._mainPlayer.attack(enemie);
      if (enemie.lifePoints < 0) break; 
      enemie.attack(this._mainPlayer);
    }
    if (this._mainPlayer.lifePoints === -1) return false;
    return true;
  }

  public fight(): number {
    this._enemies.every((enemie) => {
      const playerHasWon = this.combat(enemie);
      if (playerHasWon) return true;
      return false;
    });
    return this._mainPlayer.lifePoints === -1 ? -1 : 1;
  }
}