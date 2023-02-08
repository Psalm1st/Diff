import Drawable from './Drawable.js';

export default abstract class ScoreItem extends Drawable {
  protected scoreModifier: number;

  public constructor() {
    super();
  }

  public getScoreModifier(): number {
    return this.scoreModifier;
  }

  public update(elapsed: number): void {
  }
}
