import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import ScoreItem from './ScoreItem.js';

export default class Player extends Drawable {
  private speed: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.speed = 5;
    this.posX = maxX / 2;
    this.posY = maxY / 2;
    this.image = CanvasUtil.loadNewImage('./assets/goblin.png');
  }

  public collideWithItem(item: ScoreItem): boolean {
    if (this.posX > item.getPosX() && this.posX < item.getPosX() + item.getWidth()
    && this.posY > item.getPosY() && this.posY < item.getPosY() + item.getHeight()) return true;
    return false;
  }

  public move(direction: number): void {
    if (direction === 1) this.posY -= this.speed;
    else if (direction === 2) this.posY += this.speed;
    else if (direction === 3) this.posX -= this.speed;
    else if (direction === 4) this.posX += this.speed;
  }
}

// // import Drawable from './Drawable.js';
// // import ScoreItem from './ScoreItem.js';

// export default class Player extends Drawable {
//   private maxY: number;

//   private acceleration: number;

//   public constructor(maxX: number, maxY: number) {
//     super();
//     this.image = CanvasUtil.loadNewImage('./assets/player.png');
//     this.posX = maxX - 100;
//     this.posY = maxY / 2;
//   }

//   /**
//    *
//    */
//   public moveUp(): void {
//     this.posY -= 10;
//   }

//   /**
//    *
//    */
//   public moveDown(): void {
//     this.posY += 10;
//   }

//   // eslint-disable-next-line jsdoc/require-returns
//   /**
//    *
//    * @param item gg
//    */
//   public collidesWithItem(item: ScoreItem): boolean {
//     return item.getPosX() + item.getWidth() > this.posX
//     && item.getPosX() < this.posX + this.getWidth()
//     && item.getPosY() + item.getHeight() > this.posY
//     && item.getPosY() < this.posY + this.getHeight();
//   }
// }

// // export default class './Player.js';

// // // Path: src\Player.js
// // export default class Player {
// //     constructor() {
// //         this.name = 'Player';
// //     }
// // }

// // // Path: src\index.js
// // import Player from './Player.js';
// // const player = new Player();
// // console.log(player.name); // Player

// // // Path: src\index.ts
// // src\CanvasUtil.js;
// // import Player from './Player';
// // import CanvasUtil from './CanvasUtil.js';
// // const player = new Player();
// // console.log(player.name); // Player

// // // Path: src\CanvasUtil.js
// // export default class CanvasUtil {
// //     constructor() {
// //         this.name = 'CanvasUtil';
// //     }
// // }

// // // Path: src\index.js
