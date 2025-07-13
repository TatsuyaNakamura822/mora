import { Graphics } from '@pixi/react';
import { useCallback } from 'react';
import React from 'react'; // Reactをインポート

interface CircleButtonProps {
  x: number;
  y: number;
  radius: number;
  color: number;
  onClick: () => void;
  children?: React.ReactNode; // childrenプロパティを追加
}

export const CircleButton = ({ x, y, radius, color, onClick, children }: CircleButtonProps) => {
  const draw = useCallback(
    (g: any) => {
      g.clear();
      g.beginFill(color);
      g.drawCircle(x, y, radius);
      g.endFill();
    },
    [x, y, radius, color]
  );

  return (
    <Graphics draw={draw} interactive={true} pointerdown={onClick}>
      {children} {/* childrenをレンダリング */}
    </Graphics>
  );
};