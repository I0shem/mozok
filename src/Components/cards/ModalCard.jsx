import React from "react";
import s from "./card.module.css";
import Tilt from "react-parallax-tilt";
import SaleSVG from "../Images/sale.png";
import { motion } from "framer-motion";
import { toast } from "sonner";
import placeholderImage from "../Images/No-Image-Placeholder.png";

const ModalCard = ({
  item,
  setSelectedItem,
  setOpenModal,
  setBasketProducts,
  basketProducts,
}) => {
  const textColor = () => {
    if (item.hot === true) {
      return (
        <div onClick={(e) => e.stopPropagation()}>
          <img className={s.salePNG} src={SaleSVG} loading="lazy" alt="" />
          <div className={s.greyPrice} onClick={(e) => e.stopPropagation()}>
            {item.price * 0.1 - item.price * -1} ₴
          </div>
          <div className={s.redPrice} onClick={(e) => e.stopPropagation()}>
            {item.price} ₴
          </div>
        </div>
      );
    } else {
      return (
        <div className={s.modalPrice} onClick={(e) => e.stopPropagation()}>
          <div>{item.price} ₴</div>
        </div>
      );
    }
  };

  const BuyButtonClick = (item) => {
    toast.success("Товар додано в кошик!");

    setBasketProducts((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem._id === item._id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: (updatedItems[existingItemIndex].quantity || 0) + 1,
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    setTimeout(() => {
      console.log("Кошик: ", basketProducts);
    }, 2000);
  };
  const HandleClick = (item) => {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    body.style.overflow = "hidden";
    body.style.scrollbarGutter = "stable";
    main.style.paddingRight = "20px";
    setSelectedItem(item);
    setOpenModal(true);
  };
  const stopPropagationWrapper = (func) => (e) => {
    e.stopPropagation();
    func(e);
  };
  return (
    <motion.div
      className={s.modalProductCard}
      key={item._id}
      layoutId={item._id}
      layout="position"
      onClick={stopPropagationWrapper(() => HandleClick(item))}
    >
      <Tilt
        className={s.modalParallaxEffect}
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
        <img
          src={item.image || placeholderImage}
          alt="pic"
          className={s.cardImage}
          loading="lazy"
          onError={(e) => {
            e.target.src = placeholderImage;
          }}
        />
        <div className={s.innerElement}>
          <div className={s.title}>{item.title}</div>
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
            className={s.modalBuyButton}
            onClick={stopPropagationWrapper((e) => {
              BuyButtonClick(item);
            })}
          >
            Купити
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};
export default ModalCard;
