import Players from './Npc.js';
import { GameLoop } from './GameLoop.js';

const game = new Players(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
