"use client";

import React, { useEffect, useState } from "react";
import AirplaneIcon from "../icons/AirPlane";

const AirplaneFly = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const animate = (timestamp: number) => {
    const period = 10000; // Період повного оберту (з мінімального до максимального значення)
    const amplitude = 300; // Амплітуда вісімки
    const centerX = 350; // Центр по осі X
    const centerY = 250; // Центр по осі Y

    const t = (timestamp % period) / period; // Нормалізуємо час від 0 до 1

    // Обчислюємо координати по параметричним рівнянням вісімки
    const x =
      centerX +
      amplitude *
        (Math.sin(2 * Math.PI * t) +
          Math.sin(4 * Math.PI * t) * Math.cos(4 * Math.PI * t));
    const y =
      centerY +
      amplitude *
        (Math.sin(2 * Math.PI * t) * Math.cos(2 * Math.PI * t) -
          Math.sin(4 * Math.PI * t));

    // Обчислюємо кут повороту для літака так, щоб його ніс завжди вказував у напрямку руху
    const nextT = ((timestamp + 16) % period) / period; // Нормалізований час на наступному кадрі
    const nextX =
      centerX +
      amplitude *
        (Math.sin(2 * Math.PI * nextT) +
          Math.sin(4 * Math.PI * nextT) * Math.cos(4 * Math.PI * nextT)); // Координата X на наступному кадрі
    const nextY =
      centerY +
      amplitude *
        (Math.sin(2 * Math.PI * nextT) * Math.cos(2 * Math.PI * nextT) -
          Math.sin(4 * Math.PI * nextT)); // Координата Y на наступному кадрі
    const deltaX = nextX - x; // Зміна координати X
    const deltaY = nextY - y; // Зміна координати Y
    const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Обчислюємо кут нахилу

    setPosition({ x, y });
    setAngle(newAngle);

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "30%",
        zIndex: "0",
        transform: `translate(${position.x}px, ${position.y}px) rotate(${angle}deg)`,
      }}
    >
      <AirplaneIcon />
    </div>
  );
};

export default AirplaneFly;
