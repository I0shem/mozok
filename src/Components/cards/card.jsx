import React, { useState } from "react";
import s from "./card.module.css";
import Tilt from "react-parallax-tilt";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import SaleSVG from "../Images/sale.png";
const Card = (item) => {
  let newTitle = item.item.title;
  const [heart, setHeart] = useState(true);
  const heartClick = () => {
    setHeart(!heart);
  };
  console.log(item);
  const textColor = () => {
    if (item.item.hot === true) {
      console.log(item.item);
      return (
        <>
          <img className={s.salePNG} src={SaleSVG} alt="" />
          <div className={s.price} style={{ color: "red" }}>
            {/* модифікувати відображення ціни: зверху зліва малими чорними цифарми, закреслена ціна збільшена на 20%; по центру червона ціна - знижка*/}
            {item.item.price} ₴
          </div>
        </>
      );
    } else {
      return <div className={s.price}>{item.item.price} ₴</div>;
    }
  };
  return (
    <div className={s.productCard} key={item.item._id}>
      <Tilt
        className={s.parallaxEffect}
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#ffffff"
        glarePosition="center"
        glareBorderRadius="11px"
        scale={1.01}
        tiltMaxAngleY={1}
        tiltMaxAngleX={1}
        perspective={500}
      >
        <img src={item.item.image} alt="pic" className={s.cardImage} />
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
            Штрихкод: {item.item.characteristics["Штрихкод"]}
          </div>
          <div className={s.availability}>В наявності</div>

          {textColor()}
          <button type="submit" class={s.buyButton}>
            Купити
          </button>
        </div>
      </Tilt>
    </div>
  );
};
export default Card;
