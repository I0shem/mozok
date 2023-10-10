import React, { useState } from "react";
import s from "./card.module.css";
import Tilt from "react-parallax-tilt";
import SaleSVG from "../Images/sale.png";
import { motion } from "framer-motion";
import { db } from "../Auth/firebase";
import axios from "axios";
import LikedIcon from "./LikedIcon";
import ScalesIcon from "./ScalesIcon";
import { toast } from "sonner";
const Card = ({
  item,
  userID,
  setSelectedItem,
  setOpenModal,
  likedProducts,
  setProductsToCompare,
  productsToCompare,
  basketProducts,
  setBasketProducts,
}) => {
  let newTitle = item.title;
  const [isLiked, setIsLiked] = useState(
    likedProducts.some((i) => i._id === item._id)
  );

  const deleteItem = async () => {
    try {
      const response = await axios.delete(
        `https://eu-west-2.aws.data.mongodb-api.com/app/mozok-store-yrvzc/endpoint/delLikedItem?userId=${userID}&productTitle=${encodeURIComponent(
          item.title
        )}`
      );
      setIsLiked(false);
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const heartClick = async () => {
    try {
      if (!userID || !item._id || !db) {
        console.error("One of the required properties is undefined");
        return;
      }
      if (!isLiked) {
        const response = await axios.post(
          `https://eu-west-2.aws.data.mongodb-api.com/app/mozok-store-yrvzc/endpoint/likedItems`,
          {
            userId: userID,
            product: item,
          }
        );
        if (response) {
          console.log("Product added to likedProducts in MongoDB");
          setIsLiked(true);
        } else {
          console.error("Error adding product to likedProducts in MongoDB");
        }
      } else {
        console.log("Product removed from likedProducts");
        setIsLiked(false);
      }
    } catch (error) {
      console.error("Error updating liked product: ", error);
    }
  };

  const [scales, setScales] = useState(false);
  const scalesClickTrue = (item) => {
    setScales(true);
    console.log(item);
    setProductsToCompare((prevItems) => [...prevItems, item]);
  };

  const scalesClickFalse = (item) => {
    const newProductsToCompare = productsToCompare.filter(
      (product) => product.title !== item.title
    );
    setProductsToCompare(newProductsToCompare);
    setScales(false);
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
        <div className={s.price} onClick={(e) => e.stopPropagation()}>
          <div>{item.price} ₴</div>
        </div>
      );
    }
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
      className={s.productCard}
      key={item._id}
      layoutId={item._id}
      layout="position"
      onClick={stopPropagationWrapper(() => HandleClick(item))}
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
        <img
          src={item.image}
          alt="pic"
          className={s.cardImage}
          loading="lazy"
        />
        <LikedIcon
          isLiked={isLiked}
          onClick={stopPropagationWrapper(heartClick)}
          deleteItem={deleteItem}
        />
        <ScalesIcon
          scales={scales}
          scalesClickTrue={stopPropagationWrapper(() => scalesClickTrue(item))}
          scalesClickFalse={stopPropagationWrapper(() =>
            scalesClickFalse(item)
          )}
        />

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
export default Card;
