import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Viro extends ScoreItem {
  private maxX: number;

  private maxY: number;

  private speedX: number;

  private speedY: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/red_virus.png');
    this.scoreModifier = 5;
    this.maxX = maxX;
    this.maxY = maxY;
    this.posX = Math.random() * this.maxX;
    this.posY = Math.random() * this.maxY;
    this.speedX = (Math.random() * 2 + 1) * Math.floor(Math.random() * 2 - 1);
    this.speedY = Math.random() * 2 + 1 * Math.floor(Math.random() * 2 - 1);
  }

  public override update(elapsed: number): void {
    this.posX += this.speedX;
    this.posY += this.speedY;
    if (this.posX < 0 || this.posX > this.maxX) this.speedX *= -1;
    if (this.posY < 0 || this.posY > this.maxY) this.speedY *= -1;
    /*
    if(this.posX < -this.image.width && this.posX > this.maxX
      && this.posY < -this.image.height && this.posY > this.maxY)
      */
  }
}
