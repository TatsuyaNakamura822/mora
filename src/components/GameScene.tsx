import { Sprite, Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import words from '../data/words.json';
import { CircleButton } from './CircleButton';

export const GameScene = () => {
  const currentWord = words[0];

  return (
    <>
      <Sprite
        image={`/assets/images/${currentWord.id}.png`}
        x={window.innerWidth / 2}
        y={300}
        anchor={0.5}
        width={400}
        height={400}
      />
      <Text
        text={currentWord.word}
        x={window.innerWidth / 2}
        y={600}
        anchor={0.5}
        style={new TextStyle({ fontSize: 48, fill: '#000000' })}
      />
      <>
        {Array.from({ length: 5 }).map((_, index) => (
          <CircleButton
            key={index}
            x={window.innerWidth / 2 - 240 + index * 120}
            y={800}
            radius={50}
            color={0xaee1ff}
            onClick={() => console.log('Circle clicked')}
          />
        ))}
      </>
    </>
  );
};
