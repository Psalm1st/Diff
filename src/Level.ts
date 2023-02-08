import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
import ScoreItem from './ScoreItem.js';
import Icon from './Icon.js';
import Viro from './Viro.js';
import SceneLose from './SceneLose.js';
import SceneWin from './SceneWin.js';

export default class Level extends Scene {
  private player: Player;

  private scoreItems: ScoreItem[] = [];

  private timeToNextViro: number;

  private currentScore: number;

  private iconsLost: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new Player(maxX, maxY);
    this.timeToNextViro = 300;
    this.currentScore = 0;
    this.iconsLost = 0;
    for (let i = 0; i < 50; i++) {
      this.scoreItems.push(new Icon(this.maxX, this.maxY));
    }
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(1);
    if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(2);
    if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(3);
    if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(4);
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.scoreItems = this.scoreItems.filter((scoreItem: ScoreItem) => {
        if (this.player.collideWithItem(scoreItem)) {
          if (scoreItem instanceof Icon) {
            this.currentScore -= scoreItem.getScoreModifier();
            this.iconsLost += 1;
          }
          else if (scoreItem instanceof Viro) this.currentScore += scoreItem.getScoreModifier();
          return false;
        }
        return true;
      });
    }
  }

  public update(elapsed: number): Scene {
    this.timeToNextViro -= elapsed;
    if (this.timeToNextViro < 0) {
      if (Math.random() < 0.4) this.scoreItems.push(new Viro(this.maxX, this.maxY));
      else this.scoreItems.push(new Icon(this.maxX, this.maxY));
      this.timeToNextViro = 3000;
    }
    this.scoreItems.forEach((scoreItem: ScoreItem) => {
      scoreItem.update(elapsed);
    });
    if (this.currentScore < 0 || this.iconsLost >= 10) return new SceneLose(this.maxX, this.maxY);
    if (this.currentScore >= 100) return new SceneWin(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.writeTextToCanvas(canvas, `Score ${this.currentScore}`, 50, 50, 'left', 'Arial', 24, 'red');
    CanvasUtil.writeTextToCanvas(canvas, `Icons lost: ${this.iconsLost}`, 50, 80, 'left', 'Arial', 24, 'red');
    this.scoreItems.forEach((scoreItem: ScoreItem) => {
      scoreItem.render(canvas);
    });
    this.player.render(canvas);
  }
}
