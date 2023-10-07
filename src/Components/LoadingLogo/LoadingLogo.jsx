import React, { useState, useEffect } from "react";
import s from "./LoadingLogo.module.css";
import { ReactComponent as LogoAnimatedSVG } from "../Images/mozokcss_animated.svg";

const LoadingLogo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const messages = [
    "Розв'язуємо квантові загадки для швидшого завантаження...",
    "Готуємося представити вам свіжі знижки...",
    "Оновлюємо базу даних за допомогою магії та чарівних заклинань...",
    "Завантажуємо останні технологічні чудеса...",
    "Підбираємо високоякісну техніку для ваших потреб...",
    "Відправляємо робота за новою клавіатурою...",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setVisible(true);
      }, 500);
    }, 2200);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  return (
    <div className={s.logoAnimatedContainer}>
      <LogoAnimatedSVG className={s.logoAnimated} />
      <div className={`${s.message} ${visible ? s.messageVisible : ""}`}>
        {messages[currentIndex]}
      </div>
    </div>
  );
};

export default LoadingLogo;
