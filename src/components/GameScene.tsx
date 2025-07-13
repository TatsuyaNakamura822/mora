import { Sprite, Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import words from '../data/words.json';
import { CircleButton } from './CircleButton';
import { useState } from 'react'; // useStateをインポート

export const GameScene = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [feedback, setFeedback] = useState(''); // 正誤判定のフィードバック
  const [score, setScore] = useState(0); // スコア

  const currentWord = words[currentWordIndex];

  const handleMoraGuess = (guess: number) => {
    if (guess === currentWord.mora) {
      setFeedback('正解！');
      setScore(score + 1);
      // 次の単語へ
      setTimeout(() => {
        setFeedback('');
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000);
    } else {
      setFeedback(`不正解... 正解は ${currentWord.mora} モーラでした。`);
      // ゲームオーバーにするか、リトライさせるかなどのロジックを追加
      setTimeout(() => {
        setFeedback('');
        // ここでゲームオーバー処理やリトライ処理を実装
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);
    }
  };

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

      {/* フィードバック表示 */}
      <Text
        text={feedback}
        x={window.innerWidth / 2}
        y={700}
        anchor={0.5}
        style={new TextStyle({ fontSize: 36, fill: feedback === '正解！' ? '#00ff00' : '#ff0000' })}
      />

      {/* スコア表示 */}
      <Text
        text={`スコア: ${score}`}
        x={window.innerWidth - 100}
        y={50}
        anchor={0.5}
        style={new TextStyle({ fontSize: 24, fill: '#000000' })}
      />

      <>
        {Array.from({ length: 5 }).map((_, index) => (
          <CircleButton
            key={index}
            x={window.innerWidth / 2 - 240 + index * 120}
            y={800}
            radius={50}
            color={0xaee1ff}
            onClick={() => handleMoraGuess(index + 1)} // クリックされたボタンのモーラ数を渡す
          >
            <Text
              text={(index + 1).toString()} // ボタンにモーラ数を表示
              x={0}
              y={0}
              anchor={0.5}
              style={new TextStyle({ fontSize: 36, fill: '#000000' })}
            />
          </CircleButton>
        ))}
      </>
    </>
  );
};