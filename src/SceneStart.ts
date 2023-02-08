import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';

export default class SceneStart extends Scene {
  private starting: boolean;

  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.logo = CanvasUtil.loadNewImage('./assets/bg30.png');
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
  }

  public update(elapsed: number): Scene {
    if (this.starting) return new Level(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'Moccasin');
    CanvasUtil.drawImage(canvas, this.logo, (canvas.width - this.logo.width) / 2, (canvas.height - this.logo.height) / 2);
    CanvasUtil.writeTextToCanvas(canvas, 'Press [S] to start', canvas.width / 2, canvas.height / 8, 'center', 'serif', 48, 'black');
  }
}
