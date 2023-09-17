import React, { useState } from "react";
import s from "./card.module.css";
import Tilt from "react-parallax-tilt";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import SaleSVG from "../Images/sale.png";
import { motion } from "framer-motion";

const Card = ({ item, setSelectedItem, setOpenModal }) => {
  let newTitle = item.title;
  const [heart, setHeart] = useState(true);
  const heartClick = () => {
    setHeart(!heart);
  };
  const textColor = () => {
    if (item.hot === true) {
      return (
        <div onClick={(e) => e.stopPropagation()}>
          <img className={s.salePNG} src={SaleSVG} alt="" />
          <div
            className={s.price}
            style={{ color: "red" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* модифікувати відображення ціни: зверху зліва малими чорними цифарми, закреслена ціна збільшена на 20%; по центру червона ціна - знижка*/}
            {item.price} ₴
          </div>
        </div>
      );
    } else {
      return (
        <div className={s.price} onClick={(e) => e.stopPropagation()}>
          {item.price} ₴
        </div>
      );
    }
  };

  const HandleClick = (item) => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    setSelectedItem(item);
    console.log(item._id);
    setOpenModal(true);
  };
  return (
    <motion.div
      className={s.productCard}
      id={item._id}
      layoutId={item._id}
      layout="position"
      onClick={() => HandleClick(item)}
    >
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
        <img src={item.image} alt="pic" className={s.cardImage} />
        {heart ? (
          <div onClick={(e) => e.stopPropagation()}>
            <IconContext.Provider
              value={{ className: s.heartBtn, size: "2.5rem" }}
            >
              <BsHeart
                onClick={(e) => {
                  heartClick();
                  e.stopPropagation();
                }}
              />
            </IconContext.Provider>
          </div>
        ) : (
          <div onClick={(e) => e.stopPropagation()}>
            <IconContext.Provider
              value={{ className: s.heartBtn, size: "2.5rem" }}
            >
              <BsHeartFill
                onClick={(e) => {
                  heartClick();
                  e.stopPropagation();
                }}
              />
            </IconContext.Provider>
          </div>
        )}

        <div className={s.innerElement}>
          <div className={s.title}>{newTitle}</div>
          <div className={s.article} onClick={(e) => e.stopPropagation()}>
            Штрихкод: {item.characteristics["Штрихкод"]}
          </div>
          <div className={s.availability} onClick={(e) => e.stopPropagation()}>
            В наявності
          </div>

          {textColor()}
          <button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className={s.buyButton}
            onClick={(e) => {
              console.log(item._id);
              e.stopPropagation();
            }}
          >
            Купити
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};
export default Card;
