import React, { useState } from "react";
import s from "./card.module.css";
import Tilt from "react-parallax-tilt";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Card = (item) => {
  let newTitle = item.item.title;
  const [heart, setHeart] = useState(true);
  const heartClick = () => {
    setHeart(!heart);
  };
  return (
    <div className={s.productCard}>
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
          <div className={s.price}>{item.item.price} ₴</div>
          <button type="submit" class={s.buyButton}>
            Купити
          </button>
        </div>
      </Tilt>
    </div>
  );
};
export default Card;
