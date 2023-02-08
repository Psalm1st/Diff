import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Icon extends ScoreItem {
  private timeToNextChange: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/help1.png');
    this.timeToNextChange = Math.floor(Math.random() * 5 + 10);
    this.scoreModifier = 1;
    this.posX = Math.random() * maxX;
    this.posY = Math.random() * maxY;
    const timeInterval = setInterval(() => {
      this.timeToNextChange -= 1;
      if (this.image === CanvasUtil.loadNewImage('./assets/help4.png')) clearInterval(timeInterval);
    }, 1000);
  }

  public override update(elapsed: number): void {
    if (this.timeToNextChange < 0) {
      if (this.image.src.includes('assets/help1.png')) {
        this.image = CanvasUtil.loadNewImage('./assets/help2.png');
        this.scoreModifier = 3;
      }
      else if (this.image.src.includes('assets/help2.png')) {
        this.image = CanvasUtil.loadNewImage('./assets/help3.png');
        this.scoreModifier = 5;
      }
      else if (this.image.src.includes('assets/help3.png')) {
        this.image = CanvasUtil.loadNewImage('./assets/help4.png');
        this.scoreModifier = 7;
      }
      this.timeToNextChange = Math.floor(Math.random() * 5 + 10);
    }
  }
}
