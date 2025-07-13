import { Stage } from '@pixi/react';
import { GameScene } from './components/GameScene';

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} options={{ backgroundColor: 0xfff9ee }}>
      <GameScene />
    </Stage>
  );
};

export default App;
