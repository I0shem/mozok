import React, { useState } from "react";
import s from "./card.module.css";
import Tilt from "react-parallax-tilt";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IconContext } from "react-icons";
const test = {
  title: "Процесор INTEL Core™ i5 10400 (BX8070110400)",
  price: "5399",
  image: "https://brain.com.ua/static/images/prod_img/6/2/U0434862_big.jpg",
  characteristics: {
    "Сімейство процесора": "Intel Core i5",
    Сокет: "1200",
    "Кількість ядер": "6 ядер",
    "Кількість потоків": "12 потоків",
    "Базова тактова частота процесора": "2.9 GHz",
    "Максимальна тактова частота процесора": "4.3 GHz",
    "Максимальний TDP": "65 Вт",
    Техпроцес: "14nm",
    "Кеш-пам'ять": "12 MB Intel Smart Cache",
    "Частота системної шини": "8 GT/s",
    "Максимальний обсяг оперативной пам'яті": "128 GB",
    "Тип оперативной пам'яті": "DDR4",
    "Максимальна швидкодія пам'яті": "2666 MHz",
    "Кількість каналів пам'яті": "2",
    "Максимальна пропускна здатність пам'яті": "41.6 GB/s",
    "Графічне ядро": "Intel UHD Graphics 630",
    "Базова частота графічного процесора": "350 MHz",
    "Максимальна частота графічного процесора": "1.10 GHz",
    "Обсяг відеопам'яті графічної системи": "64 GB",
    "Покоління процесорів Intel": "Comet Lake",
    "Максимально допустима температура": "100°C",
    "Версія PCI express": "3.0 x16",
    "Тип поставки": "BOX",
    "Охолодження в комплекті": "кулер у комплекті",
    Виробник: "INTEL",
    Модель: "Core™ i5 10400",
    Артикул: "BX8070110400",
    "Гарантія, міс": "36",
    Штрихкод: "5032037187138",
    Примітка:
      "Виробник може змінювати властивості, характеристики, зовнішній вигляд і комплектацію товарів без попередження",
  },
};
const Card = () => {
  let t = test.title;
  let newTitle = t.replace(/ *\([^)]*\) */g, "");
  const [heart, setHeart] = useState(true);
  const heartClick = () => {
    setHeart(!heart);
  };
  return (
    <div className={s.productCard}>
      <Tilt
        className={s.parallaxEffect}
        glareEnable={true}
        glareMaxOpacity={0.55}
        scale={1.01}
        tiltMaxAngleY={1}
        tiltMaxAngleX={1}
        perspective={500}
      >
        <img src={test.image} alt="pic" className={s.cardImage} />
        {heart ? (
          <>
            <IconContext.Provider
              value={{ className: s.heartBtn, size: "2.5rem" }}
            >
              <BsHeart onClick={heartClick} />
            </IconContext.Provider>
          </>
        ) : (
          <>
            <IconContext.Provider
              value={{ className: s.heartBtn, size: "2.5rem" }}
            >
              <BsHeartFill onClick={heartClick} />
            </IconContext.Provider>
          </>
        )}

        <div className={s.innerElement}>
          <div className={s.title}>{newTitle}</div>
          <div className={s.article}>
            Артикул: {test.characteristics.Артикул}{" "}
          </div>
          <div className={s.availability}>В наявності</div>
          <div className={s.price}>{test.price} ₴</div>
          <button type="submit" class={s.buyButton}>
            Купити
          </button>
        </div>
      </Tilt>
    </div>
  );
};
export default Card;
